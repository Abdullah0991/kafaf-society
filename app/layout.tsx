import React from "react";
import type { Metadata } from 'next'
import { Changa } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import './globals.css'

const mainFont = Changa({ subsets: ['arabic', 'latin'] })
export const metadata: Metadata = {
    title: 'جمعية كفاف',
    description: 'جمعية كفاف',
}
export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="ar" dir='rtl'>
        <body className={mainFont.className}>
        <Navbar />
        <main className="relative overflow-hidden">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    )
}
