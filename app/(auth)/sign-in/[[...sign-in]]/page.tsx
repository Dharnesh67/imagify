"use client";
import { SignIn } from "@clerk/nextjs";
// import Image from "next/image";
// import { useState } from "react";

export default function SignInPage() {
//   const [image, setImage] = useState("");
//   async function fetchImage() {
//     try {
//     //   const response = await fetch(
//     //     "https://picsum.photos/1500/1500"
//     //   );
//       const response = await fetch(
//         "https://picsum.photos/1500/1500"
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch image");
//       }

//       const blob = await response.blob();
//       const imageURL = URL.createObjectURL(blob);
//       setImage(imageURL);
//     } catch (error) {
//       console.error("Error fetching image:", error);
//       // Fallback to a default image
//       setImage("/default-background.jpg"); // Add a fallback image in your public folder
//     }
//   }
//   setInterval(fetchImage(), 3000);
  return (
    <>
      {/* <div className="h-screen w-screen flex justify-center items-center relative">
        {image && (
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            alt="background"
            className="absolute top-0 left-0 w-full h-full z-[-1]"
          />
        )} */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" /> */}
      {/* </div> */}
        <SignIn />
    </>
  );
}
