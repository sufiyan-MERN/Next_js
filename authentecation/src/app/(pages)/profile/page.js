"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function profile() {
  const router = useRouter();

  const [lodingLogout, setLoadingLogout] = useState(false);
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [profile, setProfile] = useState(null);

  const HandleLogout = async () => {
    console.log("logout functio called");
    setLoadingLogout(true);

    await axios.get("api/v1/auth/logout", { withCredentials: true });

    router.push("/signin");
      };

    const HandleFetch = async () => {
      try {
        console.log("fetch function called");
        setLoadingFetch(true);
        const response = await axios.get("api/v1/me", {
          withCredentials: true,
        });
        console.log(response.data);
        setProfile(response.data.data);
        setLoadingFetch(false);
      } catch (error) {
        console.log(error.message);
        setLoadingFetch(false);
        router.push("/signin");
      }
    };


  return (
    <div>
      <h1>Profile Page</h1>

      <button className="bg-green-800 m-9 px-4 py-1" onClick={HandleFetch}>
        {loadingFetch ? "loading" : "fetch profile"}
      </button>
      {profile && (
        <div className="m-9 p-4 border border-slate-300 rounded-md">
          <h2 className="font-semibold">Profile Data</h2>
          <p>Username: {profile.username}</p>
          <p>Email: {profile.email}</p>
        </div>
      )}
      <button className="bg-amber-400 m-9 px-4 py-1" onClick={HandleLogout}>
        {setLoadingLogout ? "loading" : "logout"}
      </button>
    </div>
  );
}
