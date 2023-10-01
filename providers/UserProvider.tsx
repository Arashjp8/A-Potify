"use client";
import React, {ReactNode} from "react";
import {MyUserContextProvider} from "@/hooks/useUser";

interface Props {
    children: ReactNode;
}

function UserProvider({children}: Props) {
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    );
}

export default UserProvider;