import { FC } from 'react';
import HeroServices from './HeroServices';

const HeroWrapper: FC = () => {
    return (
        <>
            <div className='bg-white relative pt-10 pb-20 lg:pt-44 dark:bg-gray-900'>
                <div className='relative xl:container m-auto px-6 md:px-12 lg:px-6'>
                    <h1 className='sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white'>
                        Sending emails{' '}
                        <br className='lg:block hidden' />{' '}
                        <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300'>
                            right and simple way
                        </span>
                        .
                    </h1>
                    <div className='lg:flex'>
                        <div className='relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12'>
                            <p className='sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tempora eveniet minus ducimus corrupti voluptatibus ratione obcaecati a perferendis. Magni eius repellat architecto facilis, voluptatibus ex facere quam alias libero maiores ab consectetur corrupti incidunt, amet dolorem modi voluptate tenetur?
                            </p>
                        </div>
                        <div className='mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12'>
                            <div className='relative w-full'>
                                <div
                                    aria-hidden='true'
                                    className='absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl'
                                ></div>
                                <img
                                    src='https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg'
                                    className='relative w-full'
                                    alt='wath illustration'
                                    loading='lazy'
                                    width='320'
                                    height='280'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <HeroServices />
        </>
    );
};

export default HeroWrapper;
