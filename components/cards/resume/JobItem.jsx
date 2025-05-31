"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function JobItem({ role, scrollPosition, heightItem, roleIndex }) {
  const ref = useRef(null)

  const distance = role.index * heightItem
  const offset = scrollPosition - distance

  const blurtwo = 0
  const opacity = 1

  const marginBoxTop = "last:mb-[128px]"
  return (
    <motion.div className={`flex gap-4 pb-4 snap-start work-item ${marginBoxTop}`} style={{}} ref={ref}>
      <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        {role.logo ? (
          <Image
            width={20}
            height={20}
            src={role.logo || "/placeholder.svg"}
            alt={role.title}
            className="w-10 h-10 rounded-md"
            priority={roleIndex <= 1}
          />
        ) : (
          <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
            {role.company.charAt(0)}
          </div>
        )}
      </div>
      <div className="flex flex-wrap flex-auto gap-x-2">
        <div className="sr-only">Company and Date</div>
        <div className="flex-none w-full text-sm font-medium body-primary">
          {role.company}&nbsp;-&nbsp;
          <div
            className="inline text-xs body-secondary"
            aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end}`}
          >
            <time dateTime={role.start.dateTime ?? role.start}>{role.start.label ?? role.start}</time>{" "}
            <span aria-hidden="true">—</span>{" "}
            <time dateTime={role.end.dateTime ?? role.end}>{role.end.label ?? role.end}</time>
          </div>
        </div>

        <div className="sr-only">Role</div>
        <div className="text-xs body-secondary">{role.title}</div>
      </div>
    </motion.div>
  )
}

export default JobItem
