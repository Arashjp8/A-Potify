"use client"
import React, {ReactNode, useMemo} from 'react';
import {usePathname} from "next/navigation";
import {HiHome} from "react-icons/hi";
import {BiSearch} from "react-icons/bi";

interface Props {
    children: ReactNode;
}

function Sidebar({children}: Props) {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/'
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search'
        }
    ], [pathname]);

    return (
        <div className={'flex h-full'}>
            {children}
        </div>
    );
}

export default Sidebar;