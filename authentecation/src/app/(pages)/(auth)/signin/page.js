"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const  handleSignin= async ()=>{
     console.log("signin button clicked sending this data ",{
        email,
        password
     });
     setLoading(true)

     const response= await axios.post("http://localhost:3000/api/v1/auth/signin",{
        email,
        password
     })
     console.log("sign in successfull",response.data);
     setLoading(false)

     router.push("/profile")
}

  return (
    <div>
      <h1>SIGN IN: </h1> <hr />
      <input
      className="bg-yellow-50 text-slate-900 m-9 px-4 py-1"
        placeholder="enter your email"
        type="email"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

       <input
       className="bg-yellow-50 text-slate-900 m-9 px-4 py-1"
        placeholder="enter your password"
        type="password"
        id="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button className="bg-amber-400 m-9 px-4 py-1" onClick={handleSignin} >
        {loading ? "loading...": "signin"}
      </button>
    </div>
  );
}
