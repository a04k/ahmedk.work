import { createFileRoute } from '@tanstack/react-router'
import { SwitchTool } from '@/components/stack/SwitchTool'
import { SimpleLayout } from '@/components/ui/SimpleLayout'

export const Route = createFileRoute('/stack')({
  component: Uses,
})

function Uses() {
  return (
    <SimpleLayout
      title="The technologies I use, tools I love, and other things I recommend."
      intro="The tools and technologies I use to build applications, stay productive, and create amazing user experiences. Here's a comprehensive list of my favorite development tools and frameworks."
    >
      <SwitchTool />
    </SimpleLayout>
  )
}
