import { FC, ReactNode } from "react";

interface IAppLayoutProps {
    children?: ReactNode;
}

const AppLayout: FC<IAppLayoutProps> = ({children}: IAppLayoutProps) => {
    return (
        <div className="w-full flex">
            <div className="w-[290px] h-screen overflow-y-scroll"></div>
            {children}
        </div>
    )
}

export default AppLayout;