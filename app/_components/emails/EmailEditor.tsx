'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { DefaultJsonData } from './DefaultEmailTemplate';
import { useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/react';
import EmailEditor, { EditorRef, EmailEditorProps } from 'react-email-editor';
import { saveEmail } from '@/app/_actions/save-email';
import { toast } from 'react-hot-toast';

interface IEmailEditorProps {
    subjectTitle: string;
}

const EmailEditorWrapper: FC<IEmailEditorProps> = ({
    subjectTitle,
}: IEmailEditorProps) => {
    const [loading, setLoading] = useState(true);
    const [jsonData, setJsonData] = useState<any | null>(DefaultJsonData);
    const { user } = useClerk();
    const history = useRouter();
    const emailEditorRef = useRef<EditorRef>(null);

    const exportHtml = () => {
        const unlayer = emailEditorRef.current?.editor;

        unlayer?.exportHtml(async (data) => {
            const { design, html } = data;
            setJsonData(design);
            /* await sendEmail({
            userEmail: ["pdinis1@gmail.com"],
            subject: subjectTitle,
            content: html,
          }).then((res) => {
            toast.success("Email sent successfully!");
            history.push("/dashboard/write");
          }); */
        });
    };

    const onReady: EmailEditorProps['onReady'] = () => {
        const unlayer: any = emailEditorRef.current?.editor;
        unlayer.loadDesign(jsonData);
    };

    const saveDraft = async () => {
        const unlayer = emailEditorRef.current?.editor;

        unlayer?.exportHtml(async (data) => {
            const { design } = data;
        });
    };

    return (
        <>
            {!loading && (
                <div className='w-full h-[90vh] relative'>
                    <EmailEditor
                        minHeight={'80vh'}
                        ref={emailEditorRef}
                        onReady={onReady}
                    />
                    <div className='absolute bottom-0 flex items-center justify-end gap-4 right-0 w-full border-t p-3'>
                        <Button
                            className='bg-transparent cursor-pointer flex items-center gap-1 text-black border border-[#00000048] text-lg rounded-lg'
                            onClick={saveDraft}
                        >
                            <span className='opacity-[.7]'>Save Draft</span>
                        </Button>
                        <Button
                            className='bg-[#000] text-white cursor-pointer flex items-center gap-1 border text-lg rounded-lg'
                            onClick={exportHtml}
                        >
                            <span>Send</span>
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default EmailEditorWrapper;
