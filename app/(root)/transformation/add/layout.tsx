import { Metadata } from "next";
import React from "react";
// // import { Button } from "@/components/ui/button";
// // import {SignInButton, SignedIn, SignedOut} from "@clerk/nextjs";
// import SideNav  from "@/components/shared/SideNav";
// import MobileNav from "@/components/shared/MobileNav";
// import { usePathname } from "next/navigation";

export const metadata: Metadata = {
    title: "Transformations",
    description: "Reimagine your Images with Imagify",
  };
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main >
        Transformation
            {children}
    </main>
  );
};

export default Layout;
