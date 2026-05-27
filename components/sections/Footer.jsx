import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react";
import config from "@/config/config";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black/30 backdrop-blur-md border-t border-white/5 text-white py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 md:gap-8">
          <div className="lg:flex-shrink-0">
            <h3 className="text-lg font-InstrumentSerif mb-2 text-white">
              {config.name}
            </h3>
            <p className="text-zinc-400 text-sm mb-4 md:mb-6">
              swe.
            </p>
            <div className="flex space-x-4 mb-6 md:mb-8">
              <Link to={config.socialLinks.github}
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link to={config.socialLinks.linkedin}
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link to={config.links.email}
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </Link>
            </div>
            <p className="text-zinc-600 text-xs">
              &copy; 2025 {config.name}. All rights reserved.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 lg:ml-auto lg:max-w-2xl">
            <div className="min-w-0">
              <h4 className="text-zinc-300 font-medium text-sm mb-3 md:mb-4 font-fustat">
                Me
              </h4>
              <ul className="space-y-1.5 md:space-y-2">
                <li>
                  <Link to="/projects"
                    className="text-zinc-500 hover:text-white transition-colors text-sm block py-1"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/blog"
                    className="text-zinc-500 hover:text-white transition-colors text-sm block py-1"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/stack"
                    className="text-zinc-500 hover:text-white transition-colors text-sm block py-1"
                  >
                    Stack
                  </Link>
                </li>
              </ul>
            </div>

            <div className="min-w-0">
              <h4 className="text-zinc-300 font-medium text-sm mb-3 md:mb-4 font-fustat">
                This site
              </h4>
              <ul className="space-y-1.5 md:space-y-2">
                <li>
                  <Link to="https://github.com/a04k/ahmedk.work"
                    className="text-zinc-500 hover:text-white transition-colors text-sm block py-1"
                  >
                    Source code
                  </Link>
                </li>
              </ul>
            </div>

            <div className="min-w-0 lg:text-right">
              <div className="lg:max-w-xs lg:w-full lg:ml-auto">
                <h4 className="text-zinc-300 font-medium text-sm mb-3 md:mb-4 font-fustat">
                  Elsewhere
                </h4>
                <ul className="space-y-1.5 md:space-y-2">
                  <li>
                    <Link to={config.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors text-sm inline-flex items-center gap-1 py-1"
                    >
                      LinkedIn <ExternalLink size={12} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/5">
          <p className="text-zinc-600 text-xs text-center md:text-right font-fustat">
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
