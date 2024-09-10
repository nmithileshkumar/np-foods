"use client";

// ** React imports
import React from "react";

//custom component imports
import { PrimaryBtnAttributes } from "@/src/types";
import { twMerge } from "tailwind-merge";

const PrimaryButton = ({
  btn_label,
  is_loading,
  is_disabled,
  custom_classes,
  onClickHandler,
}: PrimaryBtnAttributes) => {
  const handleButtonClick = (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (is_disabled || is_loading) {
      () => null;
    } else {
      onClickHandler(event);
    }
  };
  return (
    <>
      <button
        className={twMerge(
          "cta-inset-shadow min-w-[175px] rounded-full bg-gradient-to-tr py-3 text-base font-Roboto-Regular",
          is_disabled
            ? "cursor-not-allowed from-chalk-grey-300 to-chalk-grey-200"
            : "cursor-pointer from-chalk-primary-orangeShades-200 to-chalk-primary-redShades-100 text-white",
          is_loading && "cursor-not-allowed opacity-80",
          custom_classes
        )}
        onClick={(event) => handleButtonClick(event)}
      >
        {btn_label}
      </button>
    </>
  );
};

export default PrimaryButton;
