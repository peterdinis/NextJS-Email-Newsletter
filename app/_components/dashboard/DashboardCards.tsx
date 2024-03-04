import { FC } from 'react';
import DashboardCard from './DashboardCard';

const DashboardCards: FC = () => {
    return (
        <div className='gap-2 grid grid-cols-2 sm:grid-cols-4'>
            <DashboardCard title={'AAAA'} />
            <DashboardCard title={'AAAA'} />
            <DashboardCard title={'AAAA'} />
            <DashboardCard title={'AAAA'} />
        </div>
    );
};

export default DashboardCards;
