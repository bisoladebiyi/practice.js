import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";
import Button from "../components/elements/button";
import HeadComponent from "../components/head";
import Input from "../components/elements/input";
import { auth } from "../firebase";
import { UserDataType } from "../types";
import { createAccount } from "../utils";

const Signup = () => {
  const [user, setUser] = useState<UserDataType>(userData);
  const [showErrorMsg, setShowErrorMsg] = useState(false)
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/dashboard");
      }
    });
  }, [router]);
  const signUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(user.password === user.confirm){
      createAccount(user)
      .then(() => router.push("/dashboard"))
      .catch((err) => console.log(err));
    }else{
      setShowErrorMsg(true)
    }
    
  };

  return (
    <div className="containerDiv grid place-items-center">
       <HeadComponent title="Practice.js - Sign Up" />
      <div className="text-center w-1/2 bg-slate-100 p-10 rounded-sm h-full grid place-items-center">
        <div className="w-full">
          <p className="font-black text-5xl text-gray-700 cursor-pointer">
            Practice<span className="text-purp">.js</span>
          </p>
          <p className="font-bold text-xl text-gray-700 mt-8">Welcome!</p>
          <p className="font-bold text-lg text-gray-600 mb-8">
            Let&apos;s get you started. Create an account today...
          </p>
          {showErrorMsg && <p className="text-red-600 text-sm font-bold mb-2">Password does not match!</p>}
          <form action="" onSubmit={(e) => signUp(e)}>
            <div className="flex flex-col items-center">
              <Input
                type={"text"}
                placeholder="First Name"
                focus={true}
                value={user.firstName}
                id="firstName"
                user={user}
                setUser={setUser}
              />
              <Input
                type={"text"}
                placeholder="Last Name"
                value={user.lastName}
                id="lastName"
                user={user}
                setUser={setUser}
              />
              <Input
                type={"email"}
                placeholder="Email"
                value={user.email}
                id="email"
                user={user}
                setUser={setUser}
              />
              <Input
                type={"password"}
                placeholder="Password"
                value={user.password}
                id="password"
                user={user}
                setUser={setUser}
              />
              <Input
                type={"password"}
                placeholder="Confirm Password"
                value={user.confirm}
                id="confirm"
                user={user}
                setUser={setUser}
              />
            </div>
            <Button
              size="large"
              noTransparentBg="true"
              className="btn"
              type="submit"
            >
              Create Account
            </Button>
          </form>
          <p className="mt-4">
            Already have an account?{" "}
            <Link href={"/login"} passHref>
              <span className="text-purp cursor-pointer font-semibold">
                Log In.
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const userData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm: "",
};

export default Signup;
