import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import React, { ReactNode } from "react";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

const figtreeFont = Figtree({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
    title: "Spotify Clone",
    description: "Listen to music!"
};

export default function RootLayout({
                                       children
                                   }: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <body className={figtreeFont.className} style={figtreeFont.style}>
        <ToasterProvider />
        <SupabaseProvider>
            <UserProvider>
                <ModalProvider />
                <Sidebar>
                    {children}
                </Sidebar>
            </UserProvider>
        </SupabaseProvider>
        </body>
        </html>
    );
}
