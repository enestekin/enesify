"use client";

import { PanelRightOpen } from "lucide-react";
import { usePathname } from "next/navigation";
import { HOME_LINKS, ME_LINKS, SOCIAL_LINKS } from "@/constants/navbar-links";
import SidebarSection from "./SidebarSection";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-secondary text-secondary h-full min-h-screen w-52 border-r font-medium">
      <nav>
        <div className="flex h-12 items-center justify-between px-4">
          <h1 className="text-primary font-bold">Enes Tekin</h1>
          <PanelRightOpen />
        </div>

        <SidebarSection links={HOME_LINKS} pathname={pathname} />
        <SidebarSection title="Me" links={ME_LINKS} pathname={pathname} />
        <SidebarSection
          title="Social"
          links={SOCIAL_LINKS}
          pathname={pathname}
          showArrow
        />
      </nav>
    </aside>
  );
}
