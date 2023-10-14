import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import React, { ReactNode } from "react";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserID from "@/actions/getSongsByUserID";
import Player from "@/components/Player";

const figtreeFont = Figtree({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
    title: "Spotify Clone",
    description: "Listen to music!"
};

export const revalidate = 0;

export default async function RootLayout({
                                             children
                                         }: {
    children: ReactNode
}) {
    const userSongs = await getSongsByUserID();
    return (
        <html lang="en">
        <body className={figtreeFont.className} style={figtreeFont.style}>
        <ToasterProvider />
        <SupabaseProvider>
            <UserProvider>
                <ModalProvider />
                <Sidebar songs={userSongs}>
                    {children}
                </Sidebar>
                <Player />
            </UserProvider>
        </SupabaseProvider>
        </body>
        </html>
    );
}
