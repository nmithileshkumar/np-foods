import { ISvgComponentProps } from "@/src/types";
import React from "react";

function InvalidErrorIcon({ custom_classes }: ISvgComponentProps) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={custom_classes}
    >
      <path
        d="M10.308 0L6 4.308L1.692 0L0 1.692L4.308 6L0 10.308L1.692 12L6 7.692L10.308 12L12 10.308L7.692 6L12 1.692L10.308 0Z"
        fill="#FF0000"
      />
    </svg>
  );
}

export default InvalidErrorIcon;
