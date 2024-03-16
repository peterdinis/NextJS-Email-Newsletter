'use client';

import { FC } from 'react';
import AppLayout from '../shared/AppLayout';
import { useUser } from '@clerk/nextjs';
import DashboardSecHeader from './DashboardSecHeader';
import { GrOverview } from "react-icons/gr";

const DashboardWrapper: FC = () => {
    const { user } = useUser();
    return (
        <AppLayout>
            <div className='p-5 w-full'>
                <h1 className='text-3xl mt-6 text-center text-black font-medium'>
                    Hi {user?.fullName} and welcome 👋
                </h1>
                <DashboardSecHeader icon={<GrOverview />} title={'Overview'} />
            </div>
        </AppLayout>
    );
};

export default DashboardWrapper;
