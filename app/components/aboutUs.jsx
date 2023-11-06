import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div>
      <div>
        <div>
          <p>ABOUT US</p>
          <p>Your Logistics Partner in Excellence</p>
          <p>
            At Jet Cargo, we don't just move goods; we engineer seamless supply
            chain solutions that propel business forward. With a legacy of
            excelllence spanning years, we've soared to new heights in the world
            of logistics, becoming a trusted name synonymous with reliability,
            efficiency, and innovation.
          </p>
        </div>
        //Top left side
        <div>
            <div>
<Image src="/images/AboutUs/AboutUs1.jpg" alt="About Us 1" width={500} height={500} />
<p>Our Vision</p>
//add a line here to separate the text
<p></p>
            </div>
            <div>

            </div>
        </div>//Bottom left side
      </div>
      //Left Side About Us
      <div>
        <div></div>// Top right side
        <div></div>//Bottom right side
      </div>
      //Right Side About Us
    </div> //Full About Us Page
  );
}
