"use client"

import { FC, ReactNode } from "react"

interface IAuthHelper {
    children?: ReactNode;
}

const AuthHelper: FC<IAuthHelper> = ({children}: IAuthHelper) => {
    return (
        <div className="flex justify-center align-top mt-8">{children}</div>
    )
}

export default AuthHelper;