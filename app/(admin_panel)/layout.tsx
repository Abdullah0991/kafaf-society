import React from "react";
import type { Metadata } from 'next'
import { Changa } from "next/font/google";
import './globals.css'

const mainFont = Changa({ subsets: ['arabic', 'latin'] })

export const metadata: Metadata = {
    title: 'جمعية كفاف - لوحة التحكم',
    description: 'لوحة التحكم ببيانات جمعية كفاف',
}

export default function AdminLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="ar" dir='rtl'>
        <body className={mainFont.className}>
        <main className="relative overflow-hidden">
            {children}
        </main>
        </body>
        </html>
    )
}