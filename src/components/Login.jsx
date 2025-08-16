import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  function toggleSignInForm() {
    setIsSignIn(!isSignIn);
  }
  return (
    <div className="relative h-screen flex items-center justify-center">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
          alt="background"
        />
      </div>

      {/* Form in center */}
      <form className="relative z-10 w-3/12 bg-black bg-opacity-70 p-12 rounded">
        <h1 className="text-white text-2xl mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full name"
            className="p-2 m-2 w-full rounded"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full rounded"
        />
        <button className="p-3 m-4 w-full bg-red-600 text-white rounded">
          Submit
        </button>
        <p onClick={toggleSignInForm} className="py-4 text-white cursor-pointer">
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered ? Sign In Now"}
        </p>
      </form>
    </div>
  );
}

export default Login;
