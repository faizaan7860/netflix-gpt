import React, { useState } from "react";
import Header from "./Header";
import { z } from "zod";

// Step 1: Create schema (the rules)
const SignUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 letters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be 6 or more letters"),
});

const SignInSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be 6 or more letters"),
});

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function toggleSignInForm() {
    setIsSignIn(!isSignIn);
  }

  // Step 2: Submit function
  function handleSubmit(e) {
    e.preventDefault();

    const formData = { name, email, password };

    const result = isSignIn
      ? SignInSchema.safeParse(formData)
      : SignUpSchema.safeParse(formData);

    if (!result.success) {
      const newErrors = {};
      result.error.issues.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors)
    }else{
      setErrors({});
      console.log("✅ Success:", result.data);
    }
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
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-3/12 bg-black bg-opacity-70 p-12 rounded"
      >
        <h1 className="text-white text-2xl mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <>
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 m-2 w-full rounded bg-slate-700 text-white"
          />
          {errors.name && <p className="text-red-500 text-md font-bold">{errors.name}</p>}
          </>
        )}

        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 m-2 w-full rounded bg-slate-700 text-white"
        />
        {errors.email && <p className="text-red-500 text-md font-bold">{errors.email}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 m-2 w-full rounded bg-slate-700 text-white"
        />
        {errors.password && <p className="text-red-500 text-md font-bold">{errors.password}</p>}

        <button
          type="submit"
          className="p-3 m-4 w-full bg-red-600 text-white rounded"
        >
          Submit
        </button>

        <p
          onClick={toggleSignInForm}
          className="py-4 text-white cursor-pointer"
        >
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered ? Sign In Now"}
        </p>
      </form>
    </div>
  );
}

export default Login;
