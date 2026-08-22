
import { Fragment } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/cards/Card";
import Media from "@/components/cards/project/Media";
import { Button } from "@/components/ui/Button";

// Entrance animation is pure CSS (.stack-enter in globals.css) so the cards
// paint — and register LCP — without waiting for JS hydration. Framer-motion
// only drives the mouse-parallax springs. Rotation is deterministic (the old
// Math.random() variant caused SSR/client mismatches).
const cardRotation = (i) => -8 + ((i * 7) % 16);

// Mock projects data as fallback
const projectList = [
  {
    title: "Current Portfolio Website",
    cover: "/images/projects/portfolio.webp",
    publishedAt: "2025-06-01",
  },
  {
    title: "Old portfolio",
    cover: "/images/projects/oldfolio.webp",
    publishedAt: "2024-06-01",
  },
  {
    title: "repAI",
    cover: "/images/projects/repai1.webp",
    publishedAt: "2025-02-29",
  },
  {
    title: "Orbit",
    cover: "/images/projects/orbit2.webp",
    publishedAt: "2024-10-05",
  },
  // {
  //   title: "Orbit",
  //   cover: "/images/projects/orbit1.webp",
  //   publishedAt: "2024-10-05",
  // },
];

function CardHome({ className, projects = projectList }) {
  const items = projects.slice(0, 5);

  return (
    <Card
      as="div"
      className={cn("group gap-2 relative overflow-hidden", className)}
    >
      <Card.Pill icon={MessageCircle} className="z-10 mb-0">
        Projects
      </Card.Pill>
      <div className="flex items-center justify-center w-full h-[220px]">
        <div
          className="relative flex items-center justify-center transition group-hover-blur group-hover:scale-95"
          style={{ width: 260, height: 160 }}
        >
          {items.map((project, i) => {
            return (
              <Fragment key={i}>
                <div
                  className="absolute stack-enter"
                  style={{ zIndex: i * 200, "--stack-i": i }}
                >
                  <div
                    style={{ transform: `rotate(${cardRotation(i)}deg)` }}
                  >
                    <Media index={i} length={items.length} {...project} />
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>

        {/* Explore More Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40">
          <Button
            href="/projects"
            styleBtn="boxgen"
            className="px-4 py-2 text-sm font-medium shadow-lg backdrop-blur-sm"
          >
            Explore More
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </Card>
  );
}

// Export both as default and named export
export default CardHome;
export { CardHome };
// Also export as StackProject for backward compatibility
export const StackProject = CardHome;
