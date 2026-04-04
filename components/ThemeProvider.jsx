import * as React from "react"

const ThemeContext = React.createContext(undefined)

function disableAnimationForThemeChange() {
  if (typeof window === "undefined") return

  const style = document.createElement("style")
  style.textContent = `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
  document.head.appendChild(style)
  ;(window.requestAnimationFrame || window.setTimeout)(() => {
    document.head.removeChild(style)
  })
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = false,
  forcedTheme,
  themes = ["light", "dark"],
  storageKey = "theme",
  ...props
}) {
  const [theme, setTheme] = React.useState(() => {
    if (typeof window === "undefined") return defaultTheme
    return localStorage.getItem(storageKey) || defaultTheme
  })

  const applyThemeClass = React.useCallback((t) => {
    if (attribute === "class") {
      document.documentElement.classList.remove(...themes)
      if (t) document.documentElement.classList.add(t)
    } else {
      document.documentElement.setAttribute(attribute, t)
    }
  }, [attribute, themes])

  React.useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey)
    const initialTheme = savedTheme || defaultTheme

    if (initialTheme === "system" && enableSystem) {
      const mql = window.matchMedia("(prefers-color-scheme: dark)")
      applyThemeClass(mql.matches ? "dark" : "light")
    } else {
      applyThemeClass(initialTheme)
    }
  }, [storageKey, defaultTheme, enableSystem, applyThemeClass])

  React.useEffect(() => {
    if (forcedTheme) {
      applyThemeClass(forcedTheme)
    } else {
      applyThemeClass(theme)
    }
  }, [forcedTheme, theme, applyThemeClass])

  React.useEffect(() => {
    if (!disableTransitionOnChange) return
    const handleThemeChange = (newTheme) => {
      disableAnimationForThemeChange()
    }
  }, [disableTransitionOnChange])

  const value = {
    theme,
    setTheme: (newTheme) => {
      if (disableTransitionOnChange) {
        disableAnimationForThemeChange()
      }
      setTheme(newTheme)
      localStorage.setItem(storageKey, newTheme)
      applyThemeClass(newTheme)
    },
    themes,
    forcedTheme,
    systemTheme: typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }

  return <ThemeContext.Provider value={value} {...props}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export { ThemeContext }
