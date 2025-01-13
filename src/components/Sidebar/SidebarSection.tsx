import SidebarItem from "./SidebarItem";

interface SidebarSectionProps {
  title?: string;
  links: {
    title: string;
    href: string;
    icon: React.ComponentType<{ size?: number }>;
  }[];
  pathname: string;
  isCollapsed?: boolean;
  showArrow?: boolean;
}

export default function SidebarSection({
  title,
  links,
  pathname,
  isCollapsed = false,
  showArrow = false,
}: SidebarSectionProps) {
  return (
    <div className="mt-6">
      {!isCollapsed && title && (
        <h4 className="px-2 text-xs font-bold">{title}</h4>
      )}
      <ul className="mt-2 text-sm">
        {links.map((item) => (
          <SidebarItem
            key={item.title}
            title={item.title}
            href={item.href}
            Icon={item.icon}
            isActive={pathname === item.href}
            showArrow={showArrow && !isCollapsed}
            isCollapsed={isCollapsed}
          />
        ))}
      </ul>
    </div>
  );
}
