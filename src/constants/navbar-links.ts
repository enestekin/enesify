import {
  Home,
  PenLine,
  Bookmark,
  Layers,
  Route,
  Linkedin,
  Instagram,
  Github,
  Twitter,
  FileUser,
  Youtube,
  Computer,
} from "lucide-react";

const HOME_LINKS = [
  { title: "Home", href: "/", icon: Home },
  { title: "Writing", href: "/writing", icon: PenLine },
];

const ME_LINKS = [
  { title: "Journey", href: "/journey", icon: Route },
  { title: "Uses", href: "/uses", icon: Layers },
  { title: "Bookmarks", href: "/bookmarks", icon: Bookmark },
];

const SOCIAL_LINKS = [
  { title: "Twitter (X)", href: "https://x.com/tekindotjs", icon: Twitter },
  { title: "Github", href: "https://github.com/enestekin", icon: Github },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/enestekin/",
    icon: Linkedin,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/tekindotjs/",
    icon: Instagram,
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/@tekindotjs",
    icon: Youtube,
  },
  {
    title: "LeetCode",
    href: "https://leetcode.com/u/tekindotjs/",
    icon: Computer,
  },
  { title: "Resume", href: "https://read.cv/enestekincom", icon: FileUser },
];

export { HOME_LINKS, ME_LINKS, SOCIAL_LINKS };
