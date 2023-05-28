import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";
import React from "react";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className="text-sm mt-5 text-center ">
        You have an account ?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Sign In
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
