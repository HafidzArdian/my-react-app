import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input/Index";
import React from "react";

const FormRegister = () => {
  return (
    <form>
      <InputForm
        label="Fullname"
        type="text"
        placeholder="insert your name here.."
        name="fullname"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="Example@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="********"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="********"
        name="confirmpassword"
      />
      <Button classname="bg-blue-500 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
