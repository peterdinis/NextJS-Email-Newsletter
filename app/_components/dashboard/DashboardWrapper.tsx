"use client"


import { FC } from 'react';
import AppLayout from '../shared/AppLayout';
import { useUser } from '@clerk/nextjs';

const DashboardWrapper: FC = () => {
    const {user} = useUser();
    return (
        <AppLayout>
            <div className='p-5 w-full'>
                <h1 className='text-3xl text-black font-medium'>
                    Hi {user?.fullName}
                </h1>
            </div>
        </AppLayout>
    )
};

export default DashboardWrapper;
