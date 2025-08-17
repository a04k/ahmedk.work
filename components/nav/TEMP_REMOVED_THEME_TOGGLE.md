# Temporarily Removed Theme Toggle Components

This document tracks the theme toggle components that were temporarily removed from the website since it's only ready for dark mode at the moment.

## Files Temporarily Removed

1. `components/nav/ThemeToggle.jsx` (renamed to `ThemeToggle.jsx.bak`)

## Changes Made

### 1. Modified `components/nav/Dock.jsx`
- Removed import of `Moon`, `Sun`, and `useTheme`
- Removed the `ThemeToggleNav` component entirely
- Removed the separator (`hr`) and tooltip for the theme toggle in the dock

### 2. Modified `components/nav/FloatNav.jsx`
- Removed import of `ThemeToggle`
- Removed the `ThemeToggle` component from the desktop navigation
- Removed the `ThemeToggle` component from the mobile navigation

### 3. Modified `app/layout.jsx`
- Changed `ThemeProvider` props:
  - `defaultTheme` set to `"dark"` (was `"system"`)
  - `enableSystem` set to `{false}` (was `true`)

## How to Re-add Theme Toggle

### Step 1: Restore the ThemeToggle component
Rename `components/nav/ThemeToggle.jsx.bak` back to `ThemeToggle.jsx`:
```
ren "components/nav/ThemeToggle.jsx.bak" "ThemeToggle.jsx"
```

### Step 2: Update Dock.jsx
Add back the imports:
```jsx
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
```

Add back the ThemeToggleNav component:
```jsx
// Add this before the closing tag of the motion.div
<hr className=" h-10 w-[1px] bg-neutral-300 dark:bg-neutral-700 mt-2.5 border-none"></hr>
<TooltipProvider>
  <Tooltip delayDuration={0}>
    <TooltipTrigger>
      <ThemeToggleNav mouseX={mouseX} />
    </TooltipTrigger>
    <TooltipContent>
      <p>Theme</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

Add back the ThemeToggleNav component function:
```jsx
export function ThemeToggleNav({ className, rel, mouseX, ...props }) {
  const { resolvedTheme, setTheme } = useTheme();
  const otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  const [mounted, setMounted] = useState(false);
  const ref = useRef();

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="z-30 flex items-center justify-center w-10 rounded-full cursor-pointer bg-neutral-200/70 dark:bg-neutral-900/70 aspect-square box-gen"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
      onClick={() => setTheme(otherTheme)}
    >
      <Sun
        size={40}
        className="w-6/12 transition fill-white dark:fill-neutral-600 dark:hidden dark:stroke-neutral-300 stroke-neutral-900"
      />
      <Moon
        size={40}
        className="hidden w-6/12 transition fill-white dark:fill-neutral-600 dark:block dark:stroke-neutral-300 stroke-neutral-900"
      />
    </motion.div>
  );
}
```

### Step 3: Update FloatNav.jsx
Add back the import:
```jsx
import ThemeToggle from "@/components/nav/ThemeToggle";
```

Add back the ThemeToggle in desktop navigation:
```jsx
// Add this inside the ul tag after the generalLinks map
<div className="flex items-center pointer-events-auto">
  <ThemeToggle />
</div>
```

Add back the ThemeToggle in mobile navigation:
```jsx
// Add this after MobileNavigation in the flex div
<ThemeToggle className="ml-2" />
```

### Step 4: Update app/layout.jsx
Restore the ThemeProvider props:
```jsx
<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
>
```