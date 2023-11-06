import React  from "react";
import Image from "next/image";

export default function Header() {
    return (
<div className="flex">
    <div className="flex w-1/2 ml-20">
        <Image src="/logo.png" width={190} height={200} />
    </div>
    <div className="flex space-x-14 ml-12">
        <a className="text-gray-500 hover:text-deep-red" href="">Home</a>
        <a className="text-gray-500 hover:text-deep-red" href="">About</a>
        <a className="text-gray-500 hover:text-deep-red" href="">Services</a>
        <a className="text-gray-500 hover:text-deep-red" href="">Testimonials</a>
        <a className="text-gray-500 hover:text-deep-red" href="">Contact Us</a>
        
    </div>
</div>

    )
}