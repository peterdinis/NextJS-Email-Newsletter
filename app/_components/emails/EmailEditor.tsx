"use client"

import { FC, useEffect, useRef, useState } from "react";
import { DefaultJsonData } from "./DefaultEmailTemplate";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import {EditorRef, EmailEditorProps} from "react-email-editor";
import toast from "react-hot-toast";

interface IEmailEditorProps {
    subjectTitle: string;
}

const EmailEditor: FC<IEmailEditorProps> = ({subjectTitle}: IEmailEditorProps) => {
    
    const [loading, setLoading] = useState(true);
    const [jsonData, setJsonData] = useState<any | null>(DefaultJsonData);
    const {user} = useClerk();
    const history = useRouter();
    const emailEditorRef = useRef<EditorRef>(null);

    const exportHtml = () => {
        const unlayer = emailEditorRef.current?.editor;
    
        unlayer?.exportHtml(async (data) => {
          const { design, html } = data;
          setJsonData(design);
        });
      };
    
      const onReady: EmailEditorProps["onReady"] = () => {
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
        <>{subjectTitle}</>
    )
}

export default EmailEditor; 