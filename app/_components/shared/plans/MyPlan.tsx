'use client';

import { useSidebarStore } from '@/app/_store/sidebarStore';
import { FC, Fragment } from 'react';
import { Button, Tooltip } from '@nextui-org/react';
import { FaMoneyBillWaveAlt } from 'react-icons/fa';

const MyPlan: FC = () => {
    const { isOpen } = useSidebarStore();

    return (
        <Fragment>
            {isOpen ? (
                <Tooltip content='My plan'>
                    <FaMoneyBillWaveAlt className='ml-6 w-5 h-5' />
                </Tooltip>
            ) : (
                <>
                    <div className='ml-3'>
                        <b className='text-xl'>My Plan</b>
                        <p>
                            Your plan is{' '}
                            <span className='text-red-600'>BASIC</span>
                        </p>
                        <p>Active subscribers 1 / 100</p>
                        <div className='mt-4'>
                            <Button size='md' radius='full' color='secondary'>
                                Upgrade Plan
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </Fragment>
    );
};

export default MyPlan;
