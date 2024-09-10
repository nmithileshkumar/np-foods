"use client";

import React, { useState } from "react";
import Container from "../../core/Container";
import Register from "./Register";
import Login from "./Login";

const LoginSignUp = () => {
  const [show_register, set_show_register] = useState(true);
  return <Container>{show_register ? <Register /> : <Login />}</Container>;
};

export default LoginSignUp;
