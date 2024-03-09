'use client';

import { useSearchParams } from 'next/navigation';
import { FC } from 'react';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';
import EmailEditorWrapper from './EmailEditor';

const NewEmailComponent: FC = () => {
    const searchParams = useSearchParams();
    const subject: string = searchParams.get('subject')!;
    const subjectTitle = subject.replace(/-/g, ' ');

    return (
        <div className='w-full flex bg-[#F7F7F7]'>
            <div className='w-full p-5 bg-[#fff] rounded-r-xl'>
                <Link
                    className='opacity-[.7] w-min flex text-xl items-center'
                    href='/email/write'
                >
                    <span>
                        <IoMdArrowBack />
                    </span>
                    <span>Exit</span>
                </Link>

                <div className='my-6'>
                    <EmailEditorWrapper subjectTitle={subjectTitle} />
                </div>
            </div>
        </div>
    );
};

export default NewEmailComponent;
