import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FaIcon({ icon, size = "1.2rem", ...props }) {
  return (
    <FontAwesomeIcon
      icon={icon}
      {...props}
      style={{
        fontSize: size,
      }}
    />
  );
}
