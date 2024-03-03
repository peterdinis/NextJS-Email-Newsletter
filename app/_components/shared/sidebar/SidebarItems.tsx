import { FC } from 'react';
import SidebarItem from './SidebarItem';
import { Fa1 } from 'react-icons/fa6';
import { CiSettings } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { GiGrowth } from "react-icons/gi";

const SidebarItems: FC = () => {
    return (
        <div className='mt-4 ml-6'>
            <SidebarItem text={'Settings'} linkHref={'/settings'} icon={<CiSettings className='w-5 h-5' />} />
            <div className='mt-3'>
                <SidebarItem text={'All Emails'} linkHref={'/emails/all'} icon={<MdEmail className='w-5 h-5'  />} />
            </div>
            <div className='mt-3'>
                <SidebarItem text={'Write Email'} linkHref={'/emails/write'} icon={<FaPencilAlt className='w-5 h-5'  />} />
            </div>
            <div className='mt-3'>
                <SidebarItem text={'Active Subscribers'} linkHref={'/subscribers'} icon={<IoIosPeople className='w-5 h-5'  />} />
            </div>
            <div className='mt-3'>
                <SidebarItem text={'Grow'} linkHref={'/grow'} icon={<GiGrowth />} />
            </div>
        </div>
    );
};

export default SidebarItems;
