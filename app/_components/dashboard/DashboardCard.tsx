import React, { FC } from 'react';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

interface IDashboardCardProps {
    title: string;
}

const DashboardCard: FC<IDashboardCardProps> = ({
    title,
}: IDashboardCardProps) => {
    return (
        <>
            <Card
                shadow='sm'
                isPressable
                onPress={() => console.log('item pressed')}
            >
                <CardBody className='overflow-visible p-0'>
                    <h2 className='font-bold text-2xl'>{title}</h2>
                </CardBody>
                <CardFooter className='text-small justify-between'>
                    <b>{title}</b>
                    <p className='text-default-500'>{title}</p>
                </CardFooter>
            </Card>
        </>
    );
};

export default DashboardCard;
