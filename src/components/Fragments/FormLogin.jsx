// import { useNavigate } from "react-router-dom";
import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input/Index";
import React from "react";

const FormLogin = () => {
  // const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/product";
    // navigate("/product");
  };
  return (
    <form onSubmit={handleLogin}>
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
      <Button classname="bg-blue-500 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
