import { ISvgComponentProps } from "@/src/types";
import React from "react";

function TickIcon({ custom_classes }: ISvgComponentProps) {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={custom_classes}
    >
      <path d="M5.33369 12L0 6.74987L1.5236 5.25013L5.33531 8.99788L5.33369 8.99947L14.4764 0L16 1.49973L6.8573 10.5003L5.33477 11.9989L5.33369 12Z" />
    </svg>
  );
}

export default TickIcon;
