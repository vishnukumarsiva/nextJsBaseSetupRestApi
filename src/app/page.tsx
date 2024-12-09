"use client";

// import { Button } from "@/components";
import assets from "@/assets";
import Image from "next/image";
import { useUserPageHandler } from "@/handlers/usePageHandler";

export default function Home() {
  const { userData } = useUserPageHandler();
  console.log(userData);
  return (
    <div>
      {/* Button usage */}
      {/* <Button buttonText="Click me" /> */}
      {/* Icons usage */}
      <Image src={assets.ic_hamburger} alt="hamburger" width={24} height={24} />
      {/* Images usage */}
      {/* <Image src={assets.img_car} alt="Cars" width={240} height={240} /> */}
      <h1>Home</h1>
    </div>
  );
}
