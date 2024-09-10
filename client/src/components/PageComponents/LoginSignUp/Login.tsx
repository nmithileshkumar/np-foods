"use client";

// ** React imports
import React, { useState } from "react";
import PrimaryButton from "../../core/Buttons/PrimaryButton";
import CustomInput from "../../core/Inputs/CustomInput";
import TickIcon from "../../Icons/TickIcon";
import InvalidErrorIcon from "../../Icons/InvalidErrorIcon";

const Login = () => {
  const [user_name, set_user_name] = useState("");
  const [user_email, set_user_email] = useState("");
  const [name_error_msg, set_name_error_msg] = useState("");
  const [email_verification_status, set_email_verification_status] =
    useState("");

  const handleNameChange = (val: string) => {
    set_user_name(val);
  };
  const handleEmailChange = (val: string) => {
    set_user_email(val);
  };
  const handleResetName = () => {
    set_user_name("");
  };
  return (
    <div className="border-2 rounded-lg w-1/2 mx-auto bg-white px-4 py-8 translate-y-1/2">
      <h1 className="text-4xl font-Roboto-Bold text-chalk-primary-redShades-100 text-center">
        Login
      </h1>
      <div className="mt-2">
        <CustomInput
          type="text"
          value={user_name}
          is_disabled={false}
          onChangeHandler={handleNameChange}
          custom_classes="font-Roboto-Regular"
          placeholder="Email"
          error={name_error_msg}
          label={"Email"}
        ></CustomInput>
      </div>
      <div className="mt-2">
        <CustomInput
          type="password"
          value={user_email}
          is_disabled={false}
          onChangeHandler={handleEmailChange}
          custom_classes="font-Roboto-Regular"
          placeholder="Password"
          error={name_error_msg}
          label={"Password"}
        >
          {email_verification_status === "success" ? (
            <TickIcon custom_classes="fill-[#29C13B] mt-2 mr-1" />
          ) : email_verification_status === "failure" ? (
            <div onClick={handleResetName}>
              <InvalidErrorIcon custom_classes="mt-2 mr-1 cursor-pointer" />
            </div>
          ) : (
            <></>
          )}
        </CustomInput>
      </div>
      <div className="mt-4 md:mt-8">
        <PrimaryButton
          btn_label="Login"
          onClickHandler={() => {}}
          custom_classes="w-full"
        />
      </div>
      <p className="text-sm font-Roboto-Regular text-center text-chalk-grey-700 mt-3">
        Don&apos;t have an account ?{" "}
        <span className="text-chalk-primary-redShades-100 font-Roboto-Bold cursor-pointer underline">
          Register
        </span>
      </p>
    </div>
  );
};

export default Login;
