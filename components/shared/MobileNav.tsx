"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import  {usePathname}  from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
const MobileNav = () => {
    const pathname = usePathname();
  return (
    <header className="header">
      <Link href={"/"} className="flex items-center gap-2 md:py-2">
        <Image src="/assets/images/logo-text.svg" width={100} height={100} alt="logo" />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton  />
        </SignedIn>
        <Sheet>
          <SheetTrigger><Image src="/assets/icons/menu.svg" width={20} height={10} alt="logo" /></SheetTrigger>
          <SheetContent className="sheet-content sm:64">
            <SheetHeader>
              <SheetTitle>Different Features</SheetTitle>
              <SheetDescription>
              <ul >
                    {
                        navLinks.map((link) => {
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
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default MobileNav;
