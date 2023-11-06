import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-screen">
      <Image src="/Banner.png" layout="fill" objectFit="cover" />
      <div className="absolute bottom-0 right-0 w-1/2">
        <Image src="/truck.png" width={500} height={300} />
      </div>
      <div className="absolute top-0 left-0 p-10 w-1/2">
        <p className="flex flex-wrap text-white-500 text-6xl">We are Transforming Logistics in Tanzania And Africa</p>
        <p className="flex flex-wrap">Your trusted partner in cargo transportation, revolutionizing the logistics industry in Tanzania and across Africa</p>
      </div>
    </div>
  );
}
