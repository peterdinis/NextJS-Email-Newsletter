import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { Button, Tooltip } from '@nextui-org/react';

interface ISidebarItemProps {
    text: string;
    linkHref: string;
    icon: ReactNode;
    className?: string;
}

const SidebarItem: FC<ISidebarItemProps> = ({
    text,
    className,
    linkHref,
    icon,
}: ISidebarItemProps) => {
    return (
        <Button radius='full' variant='ghost' className={className}>
            <Link href={linkHref}>
                {icon} - {text}
            </Link>
        </Button>
    );
};

export default SidebarItem;
