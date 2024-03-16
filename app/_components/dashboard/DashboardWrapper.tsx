'use client';
import Grid from '@mui/material/Unstable_Grid2';
import { FC } from 'react';
import AppLayout from '../shared/AppLayout';
import { useUser } from '@clerk/nextjs';
import DashboardWidgetSummary from './DashboardWidget';

const DashboardWrapper: FC = () => {
    const { user } = useUser();
    return (
        <AppLayout>
            <div className='p-5 w-full'>
                <h1 className='text-3xl mt-6 text-center text-black font-medium'>
                    Hi {user?.fullName} and welcome 👋
                </h1>

                <Grid container spacing={3} mt={5}>
                    <Grid xs={12} sm={6} md={3}>
                        <DashboardWidgetSummary
                            title='Weekly Sales'
                            total={714000}
                            color='success'
                            icon={
                                <img
                                    alt='icon'
                                    src='/assets/icons/glass/ic_glass_bag.png'
                                />
                            }
                        />
                    </Grid>
                    <Grid xs={12} sm={6} md={3}>
                        <DashboardWidgetSummary
                            title='Weekly Sales'
                            total={714000}
                            color='success'
                            icon={
                                <img
                                    alt='icon'
                                    src='/assets/icons/glass/ic_glass_bag.png'
                                />
                            }
                        />
                    </Grid>
                    <Grid xs={12} sm={6} md={3}>
                        <DashboardWidgetSummary
                            title='Weekly Sales'
                            total={714000}
                            color='success'
                            icon={
                                <img
                                    alt='icon'
                                    src='/assets/icons/glass/ic_glass_bag.png'
                                />
                            }
                        />
                    </Grid>
                    <Grid xs={12} sm={6} md={3}>
                        <DashboardWidgetSummary
                            title='Weekly Sales'
                            total={714000}
                            color='success'
                            icon={
                                <img
                                    alt='icon'
                                    src='/assets/icons/glass/ic_glass_bag.png'
                                />
                            }
                        />
                    </Grid>
                </Grid>

                {/* Users graph */}
            </div>
        </AppLayout>
    );
};

export default DashboardWrapper;
