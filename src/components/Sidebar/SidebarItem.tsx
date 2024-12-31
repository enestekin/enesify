import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SidebarItemProps {
  href: string;
  title: string;
  Icon: React.ComponentType<{ size?: number }>;
  isActive?: boolean;
  showArrow?: boolean;
  isCollapsed?: boolean;
}

export default function SidebarItem({
  href,
  title,
  Icon,
  isActive,
  showArrow = false,
  isCollapsed = false,
}: SidebarItemProps) {
  return (
    <li>
      <Link
        href={href}
        className={`hover-sidebar-item flex h-7 cursor-pointer items-center ${
          isActive ? "bg-sidebar-item text-primary" : ""
        }`}
      >
        <span className={`${isCollapsed ? "px-2" : "px-4"}`}>
          <Icon size={16} />
        </span>
        <div
          className={`flex w-full items-center justify-between pr-4 ${
            isCollapsed
              ? "opacity-0 delay-0" // Sidebar kapalıyken hemen kaybolur
              : "opacity-100 transition-opacity delay-150 duration-300" // Açılırken gecikmeli görünür
          }`}
        >
          <span className="whitespace-nowrap">{title}</span>
          {showArrow && <ArrowUpRight size={16} />}
        </div>
      </Link>
    </li>
  );
}
