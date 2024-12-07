import React from "react";
import { Button } from "@/components/ui/button";
import {SignInButton, SignedIn, SignedOut} from "@clerk/nextjs";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <div className="root-container">
        <div className="wrapper">
          <SignedOut>
            <Button>
            <SignInButton />
            </Button>
          </SignedOut>
          <SignedIn>
            {children}
          </SignedIn>
        </div>
      </div>
    </main>
  );
};

export default Layout;
