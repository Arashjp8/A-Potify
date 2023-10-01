import "./globals.css";
import type {Metadata} from "next";
import {Figtree} from "next/font/google";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import React, {ReactNode} from "react";
import UserProvider from "@/providers/UserProvider";

const figtreeFont = Figtree({subsets: ["latin"], weight: ["300", "400", "500"]});

export const metadata: Metadata = {
    title: "Spotify Clone",
    description: "Listen to music!",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {

    console.log(figtreeFont);
    return (
        <html lang="en">
        <body className={figtreeFont.className} style={figtreeFont.style}>
        <SupabaseProvider>
            <UserProvider>
                <Sidebar>
                    {children}
                </Sidebar>
            </UserProvider>
        </SupabaseProvider>
        </body>
        </html>
    );
}
