"use client"

import { FC, ReactNode } from "react";
import ScrollToTop from "react-scroll-to-top";

interface IScrollToTopWrapperProps {
    children?: ReactNode
}

const ScrollToTopWrapper: FC = ({children}: IScrollToTopWrapperProps) => {
    return (
        <>
            <ScrollToTop smooth={true} />
            {children}
        </>
    )
} 

export default ScrollToTopWrapper