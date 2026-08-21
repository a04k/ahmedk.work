
import { useRef } from "react"
import { resume } from "@/data/resume"
import { motion } from "framer-motion"

import { JobItem } from "@/components/cards/resume/JobItem"

function JobsList() {
  // NOTE: no onScroll handler here — an earlier version fed scrollTop into
  // state and re-rendered every JobItem per scroll frame, but the value was
  // never used visually. Keep scrolling compositor-only.
  const containerref = useRef(null)
  return (
    <motion.div className="relative w-full">
      <section
        className="relative overflow-auto h-[192px] snap-y snap-proximity"
        ref={containerref}
      >
        {resume.map((role, roleIndex) => (
          <JobItem
            key={roleIndex}
            role={role}
            containerref={containerref}
            roleIndex={roleIndex}
          />
        ))}
      </section>
    </motion.div>
  )
}

export default JobsList
export { JobsList }
