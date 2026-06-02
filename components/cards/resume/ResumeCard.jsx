import { Briefcase, Download, Scroll } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/cards/Card";
import JobsList from "@/components/cards/resume/JobList";
import { Button } from "@/components/ui/Button";

function ResumeCard({ className }) {
  return (
    <Card className={cn(className)}>
      <Card.Pill icon={Briefcase}>Experience</Card.Pill>
      <JobsList />

      <div className="flex flex-row gap-2 w-full">
        <Button
          href="/resume"
          styleBtn="boxgen"
          className="w-1/2 py-2.5 sm:py-1"
          rel="noopener noreferrer"
          aria-label="Resume page"
          title="Resume page"
        >
          <Scroll className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" />
          <span className="hidden sm:inline whitespace-nowrap">Resume Page</span>
        </Button>
        <Button
          href="/doc/ahmed_khaled.pdf"
          download="ahmed_khaled.pdf"
          styleBtn="boxgen"
          className="w-1/2 py-2.5 sm:py-1"
          target="_blank"
          aria-label="Download resume"
          title="Download resume"
        >
          <Download className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" />
          <span className="hidden sm:inline whitespace-nowrap">Download Resume</span>
        </Button>
      </div>
    </Card>
  );
}

export default ResumeCard;
export { ResumeCard };
