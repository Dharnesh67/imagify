"use client";
import { SignIn } from "@clerk/nextjs";
export default function SignInPage() {

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center relative  bg-gradient-to-r from-slate-900 to-blue-800 ">
        <SignIn />
      </div>
    </>
  );
}
 