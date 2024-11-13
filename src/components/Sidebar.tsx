"use client";

import { SIDEBAR_LINKS, SOCIAL_LINKS } from "@/constants";
import { usePathname } from "next/navigation";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="border-secondary w-60 border-r dark:bg-gray-800">
      <div className="p-3 text-sm font-medium">
        <div className="leading-4">
          <h1>Enes Tekin</h1>
          <p>Software Engineer</p>
        </div>
        <div>
          <ul className="flex flex-col gap-1">
            {SIDEBAR_LINKS.map((item) => {
              const IconComponent = item.icon;
              return (
                <SidebarItem
                  isActive={pathname === item.href}
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  IconComponent={IconComponent}
                  showArrow={true}
                />
              );
            })}
          </ul>
          <ul className="flex flex-col gap-1">
            <h4 className="px-1 pb-1 pt-5 font-semibold">Social</h4>
            {SOCIAL_LINKS.map((item) => {
              const IconComponent = item.icon;
              return (
                <SidebarItem
                  isActive={pathname === item.href}
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  IconComponent={IconComponent}
                  showArrow={true}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
