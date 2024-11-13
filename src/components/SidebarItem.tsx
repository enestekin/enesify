import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

interface SidebarItemProps {
  href: string;
  title: string;
  IconComponent: React.ComponentType;
  isActive?: boolean;
  showArrow?: boolean;
}

export default function SidebarItem({
  href,
  title,
  IconComponent,
  isActive,
  showArrow = false,
}: SidebarItemProps) {
  return (
    <li className="group">
      <Link
        className={`hover-primary flex items-center rounded-md px-2 py-1.5 font-medium ${
          isActive ? "bg-primary" : ""
        }`}
        href={href}
      >
        <div className="flex items-center">
          <IconComponent />
          <span style={{ marginLeft: "8px" }}>{title}</span>
        </div>
        {showArrow && <FiArrowUpRight className="ml-auto" />}
      </Link>
    </li>
  );
}
