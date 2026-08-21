"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function profile() {
  const router = useRouter();

  const [lodingLogout, setLoadingLogout] = useState(false);
  const HandleLogout = async () => {
    console.log("logout functio called");
    setLoadingLogout(true);

    await axios.get("api/v1/auth/logout", { withCredentials: true });

    router.push("/signin");
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <button className="bg-amber-400 m-9 px-4 py-1" onClick={HandleLogout}>
        {setLoadingLogout ? "loading" : "logout"}
      </button>
    </div>
  );
}
