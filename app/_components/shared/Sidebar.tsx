'use client';

import { FC, useState } from 'react';
import classNames from 'classnames';
import { IoIosClose } from 'react-icons/io';

const Sidebar: FC = () => {
    const [collapsed, setSidebarCollapsed] = useState(false);

    return (
        <div>
            <div
                className={classNames({
                    'grid min-h-screen': true,
                    'grid-cols-sidebar': !collapsed,
                    'grid-cols-sidebar-collapsed': collapsed,
                    'transition-[grid-template-columns] duration-300 ease-in-out':
                        true,
                })}
            >
                <div className='bg-gray-400 text-white'>
                    <button
                        onClick={() => setSidebarCollapsed((prev) => !prev)}
                    >
                        <IoIosClose className='w-10 h-10' />
                    </button>
                    Sidebar
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
