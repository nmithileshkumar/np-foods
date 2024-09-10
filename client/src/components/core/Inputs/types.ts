import React from "react";

export interface IBasicInputProps {
  type: "text" | "number" | "password" | "tel";
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChangeHandler: (new_value: string) => void;
  label?: string;
  onBlurHandler?: () => void; // all validations here
  error?: string;
  is_disabled: boolean;
  placeholder?: string;
  spell_check?: boolean;
  custom_classes?: string;
  custom_error_classes?: string;
}

export interface ICustomInputProps extends IBasicInputProps {
  children?: React.ReactElement;
}
