"use client"

import { Fragment } from "react"
import { motion } from "framer-motion"
import { MessageCircle, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Card } from "@/components/cards/Card"
import Media from "@/components/cards/project/Media"
import { Button } from "@/components/ui/Button"

export const TRANSITION = { type: "spring", stiffness: 300, damping: 50 }

const parantVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const variants = {
  hidden: {
    y: 1500,
    opacity: 0,
    scale: 1.5,
    rotateY: 0,
    rotateZ: 0,
  },
  visible: () => {
    const rotate = -10 + Math.random() * 20

    return {
      y: 0,
      scale: 1,
      opacity: 1,
      rotateZ: rotate,
      rotateY: rotate / 10,
      transition: TRANSITION,
    }
  },
}

// Mock projects data as fallback
const projectList = [
  {
    title: "Portfolio Website",
    cover: "/placeholder.svg?height=200&width=300",
    publishedAt: "2024-01-15",
  },
  {
    title: "E-commerce Platform",
    cover: "/placeholder.svg?height=200&width=300",
    publishedAt: "2024-01-10",
  },
  {
    title: "Mobile App",
    cover: "/placeholder.svg?height=200&width=300",
    publishedAt: "2024-01-05",
  },
  {
    title: "Web Application",
    cover: "/placeholder.svg?height=200&width=300",
    publishedAt: "2024-01-01",
  },
]

function CardHome({ className, projects = projectList }) {
  const items = projects.slice(0, 4)

  return (
    <Card as="div" className={cn("group gap-2 relative overflow-hidden", className)}>
      <Card.Pill icon={MessageCircle} className="z-10 mb-0">
        Projects
      </Card.Pill>
      <div className="flex items-center justify-center w-full h-[220px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={parantVariants}
          className="relative flex items-center justify-center transition group-hover:blur-sm group-hover:scale-95"
          style={{ width: 260, height: 160 }}
        >
          {items.map((project, i) => {
            return (
              <Fragment key={i}>
                <motion.div variants={variants} className="absolute" style={{ z: i * 200 }}>
                  <Media index={i} length={items.length} {...project} />
                </motion.div>
              </Fragment>
            )
          })}
        </motion.div>

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
  )
}

// Export both as default and named export
export default CardHome
export { CardHome }
// Also export as StackProject for backward compatibility
export const StackProject = CardHome
