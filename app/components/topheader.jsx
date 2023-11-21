import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function topheader() {
  return (
    <div className="flex flex-row bg-dark-blue h-[43px]">
      <div className="flex justify-start space-x-4">
        Follow us:
        <FontAwesomeIcon
          icon={faFacebook}
          style={{ width: "13px", height: "13px" }}
        />
        <FontAwesomeIcon
          icon={faTwitter}
          style={{ width: "13px", height: "13px" }}
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ width: "13px", height: "13px" }}
        />
      </div>
      <div className="flex flex-row ">
        <div className="flex justify-end flex-row">
            <FontAwesomeIcon
                icon={faPhone}
                style={{ width: "13px", height: "13px" }}/>
          <p>Call: 1234 567 890</p>
          <p>Email: info@eac-yap.com</p>
        </div>
      </div>
    </div>
  );
}
