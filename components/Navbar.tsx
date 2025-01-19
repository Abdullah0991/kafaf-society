'use client';
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import HamburgerButton from "@/components/HamburgerButton";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const path = usePathname();
    // const currentPath = router.pathname.slice(1);

    return (
        <nav className='z-30 py-6 px-6 flex justify-between items-center shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)]'>
            <Link href={'/'} className='flex gap-2 items-center'>
                <Image src={'/app_logo_sm.png'} alt={'logo'} width={32} height={32} />
                <label className='font-bold'>كفاف</label>
            </Link>
            <ul className='hidden h-full gap-4 lg:flex'>
                {
                    NAV_LINKS.map((link) => (
                        <li key={link.key}>
                            {!link.children.length ?
                                <Link href={link.href} className={path === link.href ? 'text-emerald-500' : ''}>
                                    {link.label}
                                </Link> :
                                <div className="dropdown relative">
                                    <button key={link.key} className={path.startsWith(link.href)  ? 'text-emerald-500' : ''}>
                                        {link.label}
                                    </button>
                                    <ul className="dropdown-menu hidden absolute left-0 mt-1 w-48 bg-white rounded-lg shadow-xl z-10 border">
                                        {
                                            link.children.map((child) => (
                                                <li key={child.key}>
                                                    <Link href={child.href}
                                                          className={`text-sm hover:bg-gray-100 ${path.endsWith(child.href) ? 'text-emerald-500':'text-gray-700'} block px-4 py-2`}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            }
                        </li>
                    ))
                }
            </ul>
            {/*<span></span>*/}

            <HamburgerButton />
            {/*<button className='inline-block cursor-pointer lg:hidden'>Menu</button>*/}
        </nav>
    );
};

export default Navbar;