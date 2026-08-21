
import { useRouter, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function BackButton({ to }) {
  const router = useRouter();

  // With `to`, render a deterministic link (e.g. back to home from index
  // pages); otherwise fall through to history.back() like on $slug pages.
  if (to) {
    return (
      <Link
        to={to}
        aria-label="Go back"
        className="items-center justify-center lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-5 xl:mt-0 mb-8 flex h-10 w-10 rounded-full box-gen transition-colors hover:text-neutral-900 dark:hover:text-white"
      >
        <ArrowLeft className="w-4 h-4" />
      </Link>
    );
  }

  return (
    <button
      onClick={() => router.history.back()}
      type="button"
      aria-label="Go back"
      className="items-center justify-center lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-5 xl:mt-0 mb-8 flex h-10 w-10 rounded-full box-gen transition-colors hover:text-neutral-900 dark:hover:text-white"
    >
      <ArrowLeft className="w-4 h-4" />
    </button>
  );
}

export default BackButton;
