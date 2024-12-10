import React from "react";
// import { Button } from "@/components/ui/button";
// import {SignInButton, SignedIn, SignedOut} from "@clerk/nextjs";
import SideNav  from "@/components/shared/SideNav";
import MobileNav from "@/components/shared/MobileNav";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <SideNav/>
      <MobileNav/>
      {/* {SideNavBar} */}
      {/* {MobileNavBar} */}
      <div className="root-container">
        <div className="wrapper">
          {/* <SignedOut>
            <Button>
                <SignInButton />
            </Button>
          </SignedOut>
          <SignedIn>
          </SignedIn> */}
            {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
