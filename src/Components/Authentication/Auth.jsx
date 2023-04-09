import React from "react";
import AuthPage from "./AuthPage";
import { Toaster } from "react-hot-toast";

function Auth() {
  return (
    <>
      <Toaster />
      <AuthPage />
    </>
  );
}

export default Auth;
