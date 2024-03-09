'use client';

import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import toast from 'react-hot-toast';
import { CiCirclePlus } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';

const WriteEmailComponent: FC = () => {
    const [emailTitle, setEmailTitle] = useState('');
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleCreate = () => {
        if (emailTitle.length === 0) {
            toast.error('Enter the email subject to continue');
        } else {
            const formattedTitle = emailTitle
                .replace(/\s+/, '-')
                .replace(/&/g, '-');
            router.push(`/email/new-email?subject=${formattedTitle}`);
        }
    };

    return (
        <div className='w-full flex p-5 flex-wrap gap-6 relative'>
            <div
                onClick={() => setOpen(!open)}
                className='w-[200px] h-[200px] bg-slate-50 flex flex-col items-center justify-center rounded border cursor-pointer'
            >
                <span className='text-xl block'>
                    <CiCirclePlus className='w-10 h-10' />
                    <h4 className='text-xl ml-4 font-bold break-all'>
                        Write new email
                    </h4>
                </span>
            </div>

            {open && (
                <div className='absolute w-full flex items-center justify-center top-0 left-0 bg-[#00000028] h-screen'>
                    <div className='w-[600px] p-5 bg-white rounded shadow-neutral-400 relative'>
                        <div className='absolute top-3 right-3'>
                            <span
                                onClick={() => setOpen(!open)}
                                className='text-lg cursor-pointer'
                            >
                                <IoMdClose />
                            </span>
                        </div>

                        <h5 className='text-2xl font-bold'>
                            Enter your email subject
                        </h5>
                        <input
                            type='text'
                            name=''
                            id=''
                            className='border w-full my-2 h-[35px] px-2 outline-none'
                            value={emailTitle}
                            onChange={(e) => setEmailTitle(e.target.value)}
                        />
                        <Button
                            color='primary'
                            className='rounded text-xl mt-3'
                            onClick={handleCreate}
                        >
                            Continue
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WriteEmailComponent;
