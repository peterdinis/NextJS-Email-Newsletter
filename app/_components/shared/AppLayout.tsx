import { FC, ReactNode } from 'react';
import Sidebar from './sidebar/Sidebar';

interface IAppLayoutProps {
    children?: ReactNode;
}

const AppLayout: FC<IAppLayoutProps> = ({ children }: IAppLayoutProps) => {
    return (
        <div className='w-full flex'>
            <Sidebar />
            {children}
        </div>
    );
};

export default AppLayout;
