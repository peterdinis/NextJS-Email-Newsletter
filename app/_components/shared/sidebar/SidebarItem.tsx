'use client';

import Link from 'next/link';
import { FC, Fragment, ReactNode } from 'react';
import { useSidebarStore } from '@/app/_store/sidebarStore';
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
    const { isOpen } = useSidebarStore();

    return (
        <Fragment>
            {isOpen ? (
                <Tooltip content={text}>
                    <Link className={className} href={linkHref}>
                        {icon}
                    </Link>
                </Tooltip>
            ) : (
                <div>
                    <Link className={className} href={linkHref}>
                        <Button variant='ghost' size='md' startContent={icon}>
                            {text}
                        </Button>
                    </Link>
                </div>
            )}
        </Fragment>
    );
};

export default SidebarItem;
