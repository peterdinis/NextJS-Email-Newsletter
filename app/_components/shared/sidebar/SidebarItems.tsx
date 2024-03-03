import { FC } from 'react';
import SidebarItem from './SidebarItem';
import { Fa1 } from 'react-icons/fa6';

const SidebarItems: FC = () => {
    return (
        <div className='mt-4 ml-6'>
            <SidebarItem text={'rrr'} linkHref={'rrr'} icon={<Fa1 />} />
            <div className='mt-3'>
                <SidebarItem text={'rrr'} linkHref={'rrr'} icon={<Fa1 />} />
            </div>
            <div className='mt-3'>
                <SidebarItem text={'rrr'} linkHref={'rrr'} icon={<Fa1 />} />
            </div>
            <div className='mt-3'>
                <SidebarItem text={'rrr'} linkHref={'rrr'} icon={<Fa1 />} />
            </div>
            <div className='mt-3'>
                <SidebarItem text={'rrr'} linkHref={'rrr'} icon={<Fa1 />} />
            </div>
        </div>
    );
};

export default SidebarItems;
