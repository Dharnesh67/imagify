import React from "react";
// import { Button } from "@/components/ui/button";
// import { SignedIn, UserButton } from "@clerk/nextjs";
import SideNav from "@/components/shared/SideNav";
import MobileNav from "@/components/shared/MobileNav";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <SideNav />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">
          {/* <SignedIn>
            <UserButton />
          </SignedIn> */}
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
