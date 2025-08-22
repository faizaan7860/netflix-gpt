import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO, USERICON } from "../utils/constant";

function Header() {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="w-screen  absolute top-0 left-0 z-20 px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-40"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12 "
            alt="usericon"
            src={USERICON}
          />
          <button
            onClick={handleSignOut}
            className="ml-4 bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-200"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
