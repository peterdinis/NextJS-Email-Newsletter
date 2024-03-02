"use client"

import React, { FC, ReactNode } from "react"
import {NextUIProvider} from "@nextui-org/react";

interface NextUIWrapperProps {
    children?: ReactNode;
}

const NextUIWrapper: FC<NextUIWrapperProps> = ({children}: NextUIWrapperProps) => {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}

export default NextUIWrapper