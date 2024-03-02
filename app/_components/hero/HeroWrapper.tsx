import { FC } from 'react';
import { Spotlight } from '../shared/Spootlight';
import { Button } from '@nextui-org/react';

const HeroWrapper: FC = () => {
    return (
        <>
            <div className='h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden'>
                <Spotlight
                    className='-top-40 left-0 md:left-60 md:-top-20'
                    fill='black'
                />
                <div className=' p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0'>
                    <h1 className='text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-black'>
                        Send Emails <br /> right way
                    </h1>
                    <p className='mt-4 font-normal text-base text-black max-w-lg text-center mx-auto'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat excepturi id velit aperiam similique est
                        sapiente ipsum, provident rem alias. Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Ipsam doloribus
                        consectetur, fuga soluta maxime error nihil. Hic
                        doloribus expedita quam!
                    </p>

                    <div className='mt-5 flex justify-center'>
                        <Button color="primary" variant="shadow">Login and try</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroWrapper;
