'use client'

import { stacks } from '@/data/stacks'

import { Tool } from '@/components/stack/ToolItem'
import { ToolsSectionGrid } from '@/components/stack/ToolsSections'

function filterStacks(stacks, type) {
  return stacks.filter((stack) => stack.type === type)
}

export function SwitchTool() {
  const development = filterStacks(stacks, 'development')
  const tools = filterStacks(stacks, 'tools')

  return (
    <div className="space-y-20">
      <ToolsSectionGrid title="Development">
        {development.map((stack, index) => (
          <Tool
            grid={true}
            title={stack.title}
            href={stack.link}
            key={stack.title}
            img={stack.img}
            index={index}
          >
            {stack.title}
          </Tool>
        ))}
      </ToolsSectionGrid>
      
      <ToolsSectionGrid title="Tools">
        {tools.map((stack, index) => (
          <Tool
            grid={true}
            title={stack.title}
            href={stack.link}
            key={stack.title}
            img={stack.img}
            index={index}
          >
            {stack.title}
          </Tool>
        ))}
      </ToolsSectionGrid>
    </div>
  )
}
