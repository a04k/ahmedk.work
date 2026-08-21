
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  siReact,
  siTailwindcss,
  siGo,
  siNextdotjs,
  siDocker,
  siPostgresql,
  siPrisma,
  siBun,
  siAngular,
  siFirebase,
  siGithub,
  siFlutter,
  siTypescript,
  siNodedotjs,
  siVercel,
} from "simple-icons";

import { cn } from "@/lib/utils";

const iconBase =
  "w-7 h-7 opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110";

const makeIcon = (icon, className = "") => (
  <svg
    viewBox="0 0 24 24"
    className={cn(iconBase, className)}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d={icon.path} />
  </svg>
);

const logoSet = {
  react: makeIcon(siReact, "text-[#61DAFB]"),
  tailwind: makeIcon(siTailwindcss, "text-[#06B6D4]"),
  go: makeIcon(siGo, "text-[#00ADD8]"),
  next: makeIcon(siNextdotjs, "text-black dark:text-white"),
  docker: makeIcon(siDocker, "text-[#2496ED]"),
  postgres: makeIcon(siPostgresql, "text-[#4169E1]"),
  prisma: makeIcon(siPrisma, "text-[#2D3748] dark:text-white"),
  bun: makeIcon(siBun, "text-[#FBF0DF]"),
  angular: makeIcon(siAngular, "text-[#DD0031]"),
  firebase: makeIcon(siFirebase, "text-[#FFCA28]"),
  github: makeIcon(siGithub, "text-black dark:text-white"),
  flutter: makeIcon(siFlutter, "text-[#02569B]"),
  typescript: makeIcon(siTypescript, "text-[#3178C6]"),
  node: makeIcon(siNodedotjs, "text-[#339933]"),
  vercel: makeIcon(siVercel, "text-black dark:text-white"),
};

const reel1 = [
  { key: "react", icon: logoSet.react, label: "React" },
  { key: "next", icon: logoSet.next, label: "Next.js" },
  { key: "typescript", icon: logoSet.typescript, label: "TypeScript" },
  { key: "tailwind", icon: logoSet.tailwind, label: "Tailwind" },
  { key: "vercel", icon: logoSet.vercel, label: "Vercel" },
];

const reel2 = [
  { key: "node", icon: logoSet.node, label: "Node.js" },
  { key: "bun", icon: logoSet.bun, label: "Bun" },
  { key: "go", icon: logoSet.go, label: "Go" },
  { key: "docker", icon: logoSet.docker, label: "Docker" },
  { key: "postgres", icon: logoSet.postgres, label: "Postgres" },
];

const reel3 = [
  { key: "angular", icon: logoSet.angular, label: "Angular" },
  { key: "firebase", icon: logoSet.firebase, label: "Firebase" },
  { key: "prisma", icon: logoSet.prisma, label: "Prisma" },
  { key: "flutter", icon: logoSet.flutter, label: "Flutter" },
  { key: "github", icon: logoSet.github, label: "GitHub" },
];

function Reel({ items, duration = 20, reverse = false }) {
  const content = [...items, ...items];

  return (
    <div className="relative h-full w-full overflow-hidden z-10">
      <motion.div
        className="flex flex-col gap-3 pb-3"
        initial={{ y: reverse ? "-50%" : "0%" }}
        animate={{ y: reverse ? "0%" : "-50%" }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {content.map((item, i) => (
          <Link
            key={`${item.key}-${i}`} to="/stack"
            aria-label={item.label}
            className="block w-full"
          >
            <div className="group relative flex h-14 w-full items-center justify-center rounded-xl border border-white/30 dark:border-white/20 bg-white/5 dark:bg-white/[0.04] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:bg-white/15 dark:hover:bg-white/10 hover:border-white/50 dark:hover:border-white/40 transition-all duration-300">
              {item.icon}
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}

export default function SvgLogos({ className }) {
  return (
    <div
      className={cn(
        "relative grid h-[222px] w-full grid-cols-3 gap-6 px-4 overflow-hidden",
        "hidden dark:grid",
        className,
      )}
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
      }}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="stack-grid-pattern"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-neutral-900 dark:text-neutral-100"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stack-grid-pattern)" />
        </svg>
      </div>

      <Reel items={reel1} duration={25} />
      <Reel items={reel2} duration={35} reverse />
      <Reel items={reel3} duration={30} />
    </div>
  );
}
