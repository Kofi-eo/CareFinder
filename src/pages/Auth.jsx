import React from "react";
import Authentication from "../Components/Authentication/Authentication";
import { Toaster } from "react-hot-toast";

function Auth() {
    return (
        <>
            <Authentication />
            <Toaster />
        </>
    );
}

export default Auth;

