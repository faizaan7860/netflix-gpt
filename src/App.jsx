import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Body from "./components/Body";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);
  return <Body />;
}

export default App;
