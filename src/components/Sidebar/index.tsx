"use client";

import { useState } from "react";
import { PanelRightOpen, PanelLeftOpen } from "lucide-react";
import { usePathname } from "next/navigation";
import { HOME_LINKS, ME_LINKS, SOCIAL_LINKS } from "@/constants/navbar-links";
import SidebarSection from "./SidebarSection";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <aside
      className={`border-secondary text-secondary h-full min-h-screen duration-500 ease-in-out ${
        isCollapsed ? "w-12" : "w-52"
      } border-r font-medium`}
    >
      <nav className="px-2">
        <div
          className={`flex h-12 items-center ${
            isCollapsed ? "justify-center" : "justify-between"
          }`}
        >
          <h1
            className={`text-primary overflow-hidden whitespace-nowrap font-bold transition-all duration-300 ${
              isCollapsed
                ? "invisible max-w-0 opacity-0"
                : "visible max-w-xs opacity-100"
            }`}
            style={{ transitionProperty: "opacity, max-width" }}
          >
            Enes Tekin
          </h1>
          <button
            onClick={toggleSidebar}
            className="hover-secondary flex cursor-pointer items-center justify-center transition-transform duration-300"
          >
            {isCollapsed ? (
              <PanelLeftOpen size={16} />
            ) : (
              <PanelRightOpen size={16} />
            )}
          </button>
        </div>

        <SidebarSection
          title=""
          links={HOME_LINKS}
          pathname={pathname}
          isCollapsed={isCollapsed}
        />
        <SidebarSection
          title="Me"
          links={ME_LINKS}
          pathname={pathname}
          isCollapsed={isCollapsed}
        />
        <SidebarSection
          title="Social"
          links={SOCIAL_LINKS}
          pathname={pathname}
          isCollapsed={isCollapsed}
          showArrow={!isCollapsed}
        />
      </nav>
    </aside>
  );
}
