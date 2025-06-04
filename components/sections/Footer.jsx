import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react";
import config from "@/config/config";

export default function Footer() {
  return (
    <footer className="bg-white/20 backdrop-blur-sm dark:bg-black/20 border-y border-neutral-300/30 dark:border-neutral-800 text-neutral-900 dark:text-white py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 md:gap-8">
          {/* Left Column - About */}
          <div className="lg:flex-shrink-0">
            <h3 className="text-lg font-medium mb-2 text-neutral-900 dark:text-white">
              {config.name}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 md:mb-6">
              swe.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mb-6 md:mb-8">
              <Link
                href={config.socialLinks.github}
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link
                href={config.socialLinks.linkedin}
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href={config.links.email}
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </Link>
            </div>

            <p className="text-neutral-500 dark:text-neutral-500 text-xs">
              © 2025 {config.name}. All rights reserved.
            </p>
          </div>

          {/* Right side - Navigation columns grouped together */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 lg:ml-auto lg:max-w-2xl">
            {/* Me Column */}
            <div className="min-w-0">
              <h4 className="text-neutral-700 dark:text-neutral-300 font-medium mb-3 md:mb-4">
                Me
              </h4>
              <ul className="space-y-1.5 md:space-y-2">
                <li>
                  <Link
                    href="/projects"
                    className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-sm block py-1"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-sm block py-1"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stack"
                    className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-sm block py-1"
                  >
                    Stack
                  </Link>
                </li>
              </ul>
            </div>

            {/* This Site Column */}
            <div className="min-w-0">
              <h4 className="text-neutral-700 dark:text-neutral-300 font-medium mb-3 md:mb-4">
                This site
              </h4>
              <ul className="space-y-1.5 md:space-y-2">
                <li>
                  <Link
                    href={config.socialLinks.github}
                    className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-sm block py-1"
                  >
                    Source code
                  </Link>
                </li>
              </ul>
            </div>

            {/* Elsewhere Column - Extended on desktop */}
            <div className="min-w-0 lg:text-right">
              <div className="lg:max-w-xs lg:w-full lg:ml-auto">
                <h4 className="text-neutral-700 dark:text-neutral-300 font-medium mb-3 md:mb-4">
                  Elsewhere
                </h4>
                <ul className="space-y-1.5 md:space-y-2">
                  <li>
                    <Link
                      href={config.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-sm inline-flex items-center gap-1 py-1"
                    >
                      LinkedIn <ExternalLink size={12} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-neutral-300/30 dark:border-neutral-800">
          <p className="text-neutral-700 dark:text-neutral-300 text-xs text-center md:text-right">
            Cairo:{" "}
            {new Date().toLocaleTimeString("en-US", {
              timeZone: "Africa/Cairo",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
