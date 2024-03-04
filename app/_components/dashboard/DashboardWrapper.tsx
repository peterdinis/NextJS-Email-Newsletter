'use client';

import { FC } from 'react';
import AppLayout from '../shared/AppLayout';
import { useUser } from '@clerk/nextjs';
import DashboardCards from './DashboardCards';
import DashboardCharts from './DashboardCharts';

const DashboardWrapper: FC = () => {
    const { user } = useUser();
    return (
        <AppLayout>
            <div className='p-5 w-full'>
                <h1 className='text-3xl mt-6 text-center text-black font-medium'>
                    Hi {user?.fullName} and welcome 👋
                </h1>
                <div className='mt-5'>
                    <DashboardCards />
                </div>

                <div className='mt-6'>
                    <DashboardCharts />
                </div>
            </div>
        </AppLayout>
    );
};

export default DashboardWrapper;
