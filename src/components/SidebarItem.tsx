import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

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
    <li>
      <Link
        className={`flex items-center rounded-md py-1 px-2 hover:bg-black ${
          isActive ? 'bg-gray-400' : ''
        }`}
        href={href}
      >
        <div className='flex items-center'>
          <IconComponent />
          <span style={{ marginLeft: '8px' }}>{title}</span>
        </div>
        {showArrow && <FiArrowUpRight className='ml-auto' />}
      </Link>
    </li>
  );
}
