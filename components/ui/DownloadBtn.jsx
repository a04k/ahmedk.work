import { Download } from "lucide-react";

export default function DownloadBtn() {
  return (
    <a
      href="/doc/ahmed_khaled.pdf"
      download="ahmed_khaled.pdf"
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-lg box-gen hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
      aria-label="Download Resume PDF"
    >
      <Download size={16} />
      <span className="hidden sm:inline">Download Resume</span>
      <span className="sm:hidden">Download</span>
    </a>
  );
}
