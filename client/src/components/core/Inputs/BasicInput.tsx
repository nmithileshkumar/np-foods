import React from "react";
import { twMerge } from "tailwind-merge";
import { IBasicInputProps } from "./types";

function BasicInput({
  type,
  value,
  onChangeHandler,
  label,
  onBlurHandler,
  error,
  is_disabled,
  placeholder,
  spell_check,
  custom_classes,
  custom_error_classes = "",
}: IBasicInputProps) {
  const text_classes =
    "font-Roboto-Medium text-base text-chalk-grey-400 placeholder:font-Roboto-Regular placeholder:text-charcoal-grey-300";
  const style_classes =
    "border-[0.5px] rounded w-full py-3.5 px-4 md:px-6 outline-none border-chalk-grey-300";

  return (
    <>
      {label && label !== "" && (
        <div className="mb-2 text-lg text-chalk-heading-secondary">{label}</div>
      )}
      <input
        type={type}
        value={value}
        disabled={is_disabled}
        onChange={(e) => onChangeHandler(e.target.value)}
        onFocus={(e) =>
          type === "number" &&
          e.target.addEventListener(
            "wheel",
            function (e) {
              e.preventDefault();
            },
            { passive: false }
          )
        }
        onBlur={onBlurHandler}
        placeholder={placeholder}
        spellCheck={spell_check ? spell_check : false}
        className={twMerge(
          text_classes,
          style_classes,
          is_disabled ? "bg-chalk-grey-100" : "bg-transparent",
          custom_classes
        )}
      />
      {error && error !== "" && (
        <div
          className={`rounded-b-lg px-3 pb-1.5 pt-1 font-Roboto-Regular text-2xs text-chalk-status-failure md:inline-block md:max-w-full md:align-top md:text-sm ${custom_error_classes}`}
        >
          {error}
        </div>
      )}
    </>
  );
}

export default BasicInput;
