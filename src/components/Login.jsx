import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);

  const handleSignUp = () => {
    setSignInForm(!signInForm);
  };
  return (
    <div>
      <Header />

      <div className="relative w-full h-screen">
        <img
          className="absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_medium.jpg"
          alt="Netflix Background"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <form className="w-3/12 p-12 bg-black bg-opacity-80 rounded-lg text-white">
            <h1 className="font-bold text-3xl py-4 ">
              {signInForm ? "Sign In" : "Sign Up"}
            </h1>

            {!signInForm && (
              <input
                className="p-2 m-2 w-full bg-gray-800 text-white"
                type="text"
                placeholder="Full Name"
              />
            )}
            <input
              className="p-2 m-2 w-full bg-gray-800 text-white"
              type="text"
              placeholder="Enter email address"
            />
            <input
              className="p-2 m-2 w-full bg-gray-800 text-white"
              type="password"
              placeholder="Password"
            />
            <button className="p-4 m-2 w-full bg-red-600 hover:bg-red-700 rounded font-bold">
              {signInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-4 cursor-pointer " onClick={handleSignUp}>
              {signInForm
                ? "New to Netflix? Sign Up Now"
                : "Already Registered? Sign In Now"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
