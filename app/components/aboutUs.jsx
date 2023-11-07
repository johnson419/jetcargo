import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="grid grid-rows-1 grid-flow-col">
      <div className="">
        <div>
          <p className="text-deep-red">ABOUT US</p>
          <p className="text-black text-4xl">
            Your Logistics Partner in Excellence
          </p>
          <p className="text-gray-500">
            At Jet Cargo, we don't just move goods; we engineer seamless supply
            chain solutions that propel business forward. With a legacy of
            excelllence spanning years, we've soared to new heights in the world
            of logistics, becoming a trusted name synonymous with reliability,
            efficiency, and innovation.
          </p>
        </div>
        {/* //Top left side */}
        <div className="grid grid-rows-1 grid-flow-col gap-4">
          <div>
            <Image
              src="/images/AboutUs/AboutUs1.jpg"
              alt="About Us 1"
              width={50}
              height={50}
            />
            <p className="text-deep-red">Our Vision</p>
            {/* //add a line here to separate the text */}
            <p className="text-gray-500">
              To redefine the logistics landscape. We're driven by the belief
              that logistics isn't just about transportation; it's about
              optimising streamlining, & revolutionising the way goods move.
            </p>
          </div>
          {/* //Our Vision */}
          <div>
            <Image
              src="/images/AboutUs/AboutUs2.jpg"
              alt="About Us 1"
              width={50}
              height={50}
            />
            //line to separate the text
            <p className="text-deep-red">Our Mission</p>
            <p className="text-gray-500">
              We exist to simplify complexity, minimize disruptions, and empower
              businesses to reach their full potential.
            </p>
          </div>
          {/* //Our Mission */}
        </div>
        {/* //Bottom left side */}
      </div>
      {/* //Left Side About Us */}


      <div className="">
        <div>//Add pictures here</div>// Top right side
        <div className="grid grid-rows-1 grid-flow-col gap-2">
          <div className="bg-pale-red">
            <div className="w-1/4">
              <button></button>
              </div>
              {/* //Button */}
            <div className="w-3/4">
              <p className="text-black">Our Promise</p>
              <p className="text-gray-500">
                We're committed to excellence in everything we do. Our team
                comprises seasoned experts who bring unmatched knowledge and
                dedication to every project.
              </p>
              <button>Join Us Now</button>
            </div>
            {/* //Our Promise */}
          </div>
          <div className="bg-pale-red">
            <p className="text-deep-red">News</p>
            <p className="text-black">Product testing</p>
            <p className="text-gray-500">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at it's layout
            </p>
          </div>
          {/* // Product testing */}
        </div>
        {/* //Bottom right side */}
      </div>
      {/* //Right Side About Us */}
    </div> //Full About Us Page
  );
}
