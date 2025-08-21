import React from "react";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";


function Body() {
  const user = useSelector((store) => store.user);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: user ? <Navigate to="/browse" /> : <Login />,
    },
    {
      path: "/browse",
      element: user ? <Browse /> : <Navigate to="/" />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default Body;
