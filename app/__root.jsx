import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router"
import { ThemeProvider } from "@/components/ThemeProvider"
import { FloatNav } from "@/components/nav/FloatNav"
import Footer from "@/components/sections/Footer"
import SmoothScroll from "@/components/SmoothScroll"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "Ahmed Khaled - swe & cs student" },
      { name: "description", content: "Computer Science student, chronically online. Building innovative solutions." }
    ],
    links: [
      // Fonts are self-hosted (see @font-face in globals.css); VT323 no longer
      // loads from Google Fonts, which was a render-blocking third-party request.
      { rel: "preload", href: "/fonts/Fustat.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
      { rel: "preload", href: "/fonts/InstrumentSerif-Regular.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
    ],
  }),
  component: RootLayout,
  notFoundComponent: () => <div>Not Found</div>,
  errorComponent: ({ error }) => <div>Error: {error.message}</div>,
})

function RootLayout() {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="grid-overlay flex flex-col min-h-screen antialiased font-fustat" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <SmoothScroll />
          <div className="flex-1">
            <div className="relative mb-16 sm:mb-32">
              <main><Outlet /></main>
              <FloatNav />
            </div>
          </div>
          <Footer />
          <Toaster />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
