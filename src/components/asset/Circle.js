import React from "react";
import { useMediaQuery } from "react-responsive";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";

export default function Circle({ style, icon, color, size }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  return (
    <div className="row">
      {isDesktopOrLaptop && (
        <div
          style={{
            borderRadius: '50%',
            backgroundColor: "#F4C23B",
            margin: "10px",
            width: "100px",
            height: "100px",
            float: "none",
            margin: "0 auto",
          }}
        >
          <FontAwesomeIcon
            style={{ marginTop: "19px", width: "60px", height: "60px" }}
            icon={icon}
            color="white"
          />
        </div>
      )}
      {isTabletOrMobileDevice && (
        <div
          style={{
            borderRadius: '50%',
            backgroundColor: "#F4C23B",
            margin: "10px",
            width: "100px",
            height: "100px",
            float: "none",
            margin: "0 auto",
          }}
        >
          <FontAwesomeIcon
            style={{ marginTop: "19px", width: "60px", height: "60px" }}
            icon={icon}
            color="white"
          />
        </div>
      )}
    </div>
  );
}
