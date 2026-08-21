"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const HandleSignup = async () => {
    console.log("sign up button clicked ,sending this data:: ", {
      email,
      password,
      username,
    });

    setLoading(true);

    const response = await axios.post(
      "http://localhost:3000/api/v1/auth/signup",
      {
        email,
        username,
        password,
      },
    );

    console.log("sign up success", response.data);
    
    setLoading(false);


    router.push("/signin");
  };

  return (
    <div>
      <h1>SIGN UP:</h1> <hr />
      <input
        className="bg-red-50 text-slate-900 m-9 px-4 py-1"
        placeholder="Enter your username: "
        id="username"
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        className="bg-yellow-50 text-slate-900 m-9 px-4 py-1"
        placeholder="enter your email"
        id="username"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="bg-yellow-50 text-slate-900 m-9 px-4"
        id="password"
        type="password"
        placeholder="enter your password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button className="bg-amber-400 m-9 px-4 py-1" onClick={HandleSignup} >
        
        {loading ? "loading" : "signup"}
      </button>
    </div>
  );
}
