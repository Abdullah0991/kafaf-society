'use client'
import React, { useState } from 'react';
import { NAV_LINKS } from "@/constants";
import Link from "next/link";

const HamburgerButton = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='lg:hidden'>
            <button className="relative group" onClick={() => setOpen((state) => !state)}>
                <div
                    className="relative flex overflow-hidden items-center justify-center rounded-full w-[32px] h-[32px] transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                    <div
                        className="flex flex-col justify-between w-[16px] h-[16px] transform transition-all duration-300 origin-center overflow-hidden">
                        <div
                            className="bg-slate-800 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                        <div
                            className="bg-slate-800 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                        <div
                            className="bg-slate-800 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

                        <div
                            className="absolute items-center justify-between transform transition-all duration-500 top-2 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                            <div
                                className="absolute bg-slate-800 h-[2px] w-4 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                            <div
                                className="absolute bg-slate-800 h-[2px] w-4 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                        </div>
                    </div>
                </div>

                {
                    open &&
                    <div className='absolute w-[90vw] bg-white rounded-lg shadow-xl z-10 border left-0 mt-2 px-2'>
                        <ul className='flex flex-col gap-1'>
                            {
                                NAV_LINKS.map((link) => (
                                    <li key={link.key} className='p-3 text-start'>
                                        {
                                            !link.children.length ?
                                                <Link href={link.href}>{link.label}</Link> :
                                                <div>
                                                    <button onClick={(e) => e.stopPropagation()}>{link.label}</button>
                                                    <ol className='mt-3 list-disc ps-7'>
                                                        {
                                                            link.children.map((child) => (
                                                                <li key={child.key}>
                                                                    <Link href={child.href}
                                                                          className="hover:bg-gray-100 text-gray-700 block px-4 py-2"
                                                                    >
                                                                        {child.label}
                                                                    </Link>
                                                                </li>
                                                            ))
                                                        }
                                                    </ol>
                                                </div>
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                }
            </button>
        </div>
    );
};

export default HamburgerButton;