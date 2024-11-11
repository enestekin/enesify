import {
  FaHome,
  FaStackExchange,
  FaPencilAlt,
  FaRocket,
  FaBookmark,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFile,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SIDEBAR_LINKS = [
  { title: 'Home', href: '/', icon: FaHome },
  { title: 'Writing', href: '/writing', icon: FaPencilAlt },
  { title: 'Journey', href: '/journey', icon: FaRocket },
  { title: 'Uses', href: '/uses', icon: FaStackExchange },
  { title: 'Bookmarks', href: '/bookmarks', icon: FaBookmark },
];
const SOCIAL_LINKS = [
  { title: 'X (Twitter)', href: 'https://x.com/tekindotjs', icon: FaXTwitter },
  { title: 'Github', href: 'https://github.com/enestekin', icon: FaGithub },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/enestekin/',
    icon: FaLinkedin,
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/tekindotjs/',
    icon: FaInstagram,
  },
  { title: 'Resume', href: 'https://read.cv/enestekincom', icon: FaFile },
];

export { SIDEBAR_LINKS, SOCIAL_LINKS };
