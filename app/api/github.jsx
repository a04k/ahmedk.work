import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/github')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const { searchParams } = new URL(request.url)
        const username = searchParams.get('username')

        if (!username) {
          return Response.json({ error: 'Username is required' }, { status: 400 })
        }

        const to = new Date()
        const from = new Date(to)
        from.setFullYear(to.getFullYear() - 1)

        try {
          const query = `
            query ($username: String!, $from: DateTime!, $to: DateTime!) {
              user(login: $username) {
                contributionsCollection(from: $from, to: $to) {
                  totalCommitContributions
                  totalIssueContributions
                  totalPullRequestContributions
                  totalPullRequestReviewContributions
                  totalRepositoryContributions
                  contributionCalendar {
                    weeks {
                      contributionDays {
                        contributionCount
                        date
                        weekday
                      }
                    }
                  }
                }
                repositories(first: 1, orderBy: {field: PUSHED_AT, direction: DESC}) {
                  nodes {
                    pushedAt
                  }
                }
              }
            }
          `

          const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query,
              variables: {
                username,
                from: from.toISOString(),
                to: to.toISOString(),
              },
            }),
          })

          const data = await response.json()

          if (!response.ok) {
            return Response.json(
              { error: `GitHub API error: ${response.status}` },
              { status: response.status }
            )
          }

          if (data.errors) {
            return Response.json({ error: data.errors[0].message }, { status: 500 })
          }

          const user = data.data.user
          if (!user) {
            return Response.json({ error: 'User not found' }, { status: 404 })
          }

          const totalContributions =
            user.contributionsCollection.totalCommitContributions +
            user.contributionsCollection.totalIssueContributions +
            user.contributionsCollection.totalPullRequestContributions +
            user.contributionsCollection.totalPullRequestReviewContributions +
            user.contributionsCollection.totalRepositoryContributions

          // Get all contribution days sorted ascending by date
          const allDaysSorted =
            user.contributionsCollection.contributionCalendar.weeks
              .flatMap((week) => week.contributionDays)
              .sort((a, b) => new Date(a.date) - new Date(b.date))

          // Regroup into weeks of 7 days
          const groupedWeeks = []
          for (let i = 0; i < allDaysSorted.length; i += 7) {
            groupedWeeks.push({ contributionDays: allDaysSorted.slice(i, i + 7) })
          }

          return Response.json({
            totalContributions,
            weeks: groupedWeeks,
            lastPushDate: user.repositories.nodes[0]?.pushedAt || new Date().toISOString(),
          })
        } catch (error) {
          console.error('GitHub API Exception:', error)
          return Response.json(
            { error: 'Failed to fetch GitHub activity: ' + error.message },
            { status: 500 }
          )
        }
      },
    },
  },
})
