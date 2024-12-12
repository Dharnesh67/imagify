"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, UserButton, SignedOut, SignInButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { navLinks } from '@/constants'
// import {useRouter} from 'next/router'
import { usePathname } from 'next/navigation'
const SideNav = () => {
    const pathname = usePathname()
    return (
        <aside className='sidebar flex flex-col gap-5 justify-center items-center '>
            <Link href={'/'} >
                <Image src={"/assets/images/logo-text.svg"} width={280} height={500} alt='IMG' />
            </Link>
            <nav className='sidebar-nav'>
                <ul className='sidebar-nav_elements'>
                    {
                        navLinks.slice(0, 6).map((link) => {
                            const isActive = link.route === pathname
                            return (
                                <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-violet-600 text-white' : 'text-gray-500'
                                    } `}>
                                    <Link href={link.route} className='sidebar-link'>
                                        <Image src={link.icon} width={24} height={24} alt='ico' />
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className='sidebar-nav_elements'>
                    <li className='flex-center cursor-pointer gap-2 p-4'>
                        <SignedIn>
                            <UserButton />
                            Clerk Profile
                        </SignedIn>
                        <SignedOut>
                            <Button>
                                <SignInButton />
                            </Button>
                        </SignedOut>
                    </li>
                    {
                        navLinks.slice(6, 8).map((link) => {
                            const isActive = link.route === pathname
                            return (
                                <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-violet-600 text-white' : 'text-gray-500'
                                    } `}>
                                    <Link href={link.route} className='sidebar-link'>
                                        <Image src={link.icon} width={24} height={24} alt='ico' />
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </aside>
    )
}

export default SideNav
