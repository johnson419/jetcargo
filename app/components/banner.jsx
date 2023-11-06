import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-screen">
      <Image src="/Banner.png" layout="fill" objectFit="cover" />
      <div className="absolute bottom-0 right-0">
        <Image src="/truck.png" width={500} height={300} />
      </div>
      <div className="absolute top-0 left-0 p-10">
        <p>Your text here</p>
        <p>More text here</p>
      </div>
    </div>
  );
}
