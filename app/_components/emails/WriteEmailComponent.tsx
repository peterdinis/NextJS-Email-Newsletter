"use client"

import { FC, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const WriteEmailComponent: FC = () => {
    const [emailTitle, setEmailTitle] = useState("");
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full flex p-5 flex-wrap gap-6 relative">
            <div onClick={() => setOpen(!open)} className="w-[200px] h-[200px] bg-slate-50 flex flex-col items-center justify-center rounded border cursor-pointer">
                <span className="text-2xl block">
                    <CiCirclePlus className="w-10 h-10" />
                    <h4 className="text-3xl font-bold">Write new email</h4>
                </span>
            </div>
        </div>
    )
}

export default WriteEmailComponent;