import {
    BookOpen,
  Codepen,
  FileText,
  Github,
  HomeIcon,
  Layers,
  Linkedin,
  Mail,
} from "lucide-react";
import config from "@/config/config";

export const generalLinks = [
  {
    href: config.links.home,
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: config.links.resume,
    label: "Resume",
    icon: FileText,
  },
  {
    href: config.links.blog,
    label: "Blog",
    icon: BookOpen,
  },
  {
    href: config.links.projects,
    label: "Projects",
    icon: Codepen,
  },
  {
    href: config.links.stack,
    label: "Stack",
    icon: Layers,
  },
];

export const linksSocial = [
  {
    href: config.socialLinks.github,
    icon: Github,
    label: "GitHub",
    outline: true,
  },
  {
    href: config.socialLinks.linkedin,
    icon: Linkedin,
    label: "LinkedIn",
    outline: true,
  },
  {
    href: config.links.email,
    icon: Mail,
    label: "Email",
    outline: true,
  },
];
