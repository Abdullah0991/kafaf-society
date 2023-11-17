import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from "@/constants";

const Footer = () => {
    return (
        <footer className='flexCenter my-24'>
            <div className='padding-container max-container flex w-full flex-col gap-14'>
                <div className='flex flex-col items-center justify-center gap-[10%] md:flex-row'>
                    <Link href={'/'} className='mb-10'>
                        <Image src={'/app_logo_no_attributions.png'} alt='logo' width={128} height={128} />
                    </Link>

                    <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
                        {FOOTER_LINKS.map(columns => (
                            <FooterColumn title={columns.title} key={columns.title}>
                                <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                                    {columns.links.map((link) => (
                                        <Link href={link.href} key={link.label} target='_blank'>{link.label}</Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        ))}

                        <div className='flex flex-col gap-5'>
                            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                                {
                                    FOOTER_CONTACT_INFO.links.map((link) => (
                                        <div className='flex gap-2' key={link.label}>
                                            <p className='whitespace-nowrap text-gray-30'>{link.label}:</p>
                                            <Link href={link.href} className='flex gap-4 md:flex-col lg:flex-row'>
                                                <p className='medium-14 whitespace-nowrap text-blue-70'>{link.value}</p>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </FooterColumn>
                        </div>
                    </div>
                </div>

                <div className='border bg-gray-20' />
                <p className='regular-14 w-full text-center text-gray-50'>جميع الحفوق محفوظة | جمعية كفاف&copy; 2023</p>
            </div>
        </footer>
    );
};

type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
}
const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
        <div className='flex flex-col gap-5'>
            <h4 className='font-bold whitespace-nowrap'>{title}</h4>
            {children}
        </div>
    );
}

export default Footer;