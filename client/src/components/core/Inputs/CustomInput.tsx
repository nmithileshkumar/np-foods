import React from "react";
import { twMerge } from "tailwind-merge";
import { ICustomInputProps } from "./types";
import BasicInput from "./BasicInput";

function CustomInput({
  type,
  value,
  onChangeHandler,
  label,
  onBlurHandler,
  error,
  is_disabled,
  custom_classes,
  custom_error_classes,
  placeholder,
  children,
}: ICustomInputProps) {
  const props = {
    type,
    value,
    onChangeHandler,
    label,
    onBlurHandler,
    error,
    is_disabled,
    custom_classes,
    custom_error_classes,
    placeholder,
    children,
  };

  return (
    <div className="relative">
      <BasicInput {...props} />
      {children && (
        <div
          className={twMerge(
            "absolute right-4",
            label && label !== "" ? "top-10" : "top-4"
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default CustomInput;
