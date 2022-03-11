import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { auth } from "../firebase";

const App = () => {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/dashboard");
      } else {
        router.push("/home");
      }
    });
  }, [router]);
  return <div></div>;
};

export default App;
