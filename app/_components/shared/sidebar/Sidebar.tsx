'use client';

import { FC } from 'react';
import classNames from 'classnames';
import { IoIosClose } from 'react-icons/io';
import SidebarItems from './SidebarItems';
import { useSidebarStore } from '@/app/_store/sidebarStore';

const Sidebar: FC = () => {
    const { isOpen, toggleSidebar } = useSidebarStore();
    return (
        <div>
            <div
                className={classNames({
                    'grid min-h-screen': true,
                    'grid-cols-sidebar': !isOpen,
                    'grid-cols-sidebar-collapsed': isOpen,
                    'transition-[grid-template-columns] duration-300 ease-in-out':
                        true,
                })}
            >
                <div className='bg-gray-400 text-white'>
                    <button onClick={toggleSidebar}>
                        <IoIosClose className='w-10 h-10' />
                    </button>
                    <div className='mt-6'>
                        <SidebarItems />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
