import Link from "next/link";
import { FC, ReactNode } from "react";

interface ISidebarItemProps {
    text: string;
    linkHref: string;
    icon: ReactNode;
    className?: string;
}

const SidebarItem: FC<ISidebarItemProps> = ({text, className, linkHref, icon}: ISidebarItemProps) => {
    return (
        <span className={className}>
            <Link href={linkHref}>{icon} - {text}</Link>
        </span>
    )
}

export default SidebarItem