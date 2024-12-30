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
        className={`hover-sidebar-item flex h-7 items-center ${
          isActive ? "bg-sidebar-item text-primary" : ""
        }`}
      >
        <span className={`${isCollapsed ? "px-2" : "px-4"}`}>
          <Icon size={16} />
        </span>
        {!isCollapsed && (
          <div className="flex w-full items-center justify-between pr-4">
            {title}
            {showArrow && <ArrowUpRight size={16} />}
          </div>
        )}
      </Link>
    </li>
  );
}
