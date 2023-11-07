import React from "react";
import Image from "next/image";

export default function Services() {
  return (
    <div className="container bg-dark-blue w-screen md:w-auto">
      <div className="w-1/4">
        <Image />
      </div>
      {/*right side of services */}
      <div className="w-3/4">
        <div>
          <p>OUR SERVICES</p>
          <p>Navigating Logistics Excellence</p>
          <div className="grid grid-cols-2">
            <p>Shared Cargo Service</p>
            <p>
              Save on shipping costs by sharing cargo space with others. Enjoy
              the convinience of parcel drop-offs, real-time tracking, and
              reliable deliveries.
            </p>
            <button>Contact Our Team</button>
          </div>
        </div>
        {/* Upper part services */}
        <div className="grid grid-cols-4">
<div>
    {/* Number 1 icon */}
    <p>Fast and Secure Deliveries</p>
    {/* Line to separate code */}
</div>
<div>
    <p>Cost-Effective Solutions</p>
</div>
<div>
    <p>Real-Time Shipment Tracking</p>
</div>
<div>
    Dedicated Customer Support
</div>

        </div>
        {/* Bottom part services */}
      </div>
      {/* Left side of services */}
    </div> //Services
  );
}
