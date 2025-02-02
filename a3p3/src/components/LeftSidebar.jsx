import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

export default function LeftSidebar() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <div className="left-sidebar">
      <p>Left Sidebar</p>
      <h4>Is User Logged In : {isLoggedIn ? "Yes" : "No"}</h4>
      <button onClick={login}>LOGIN</button>
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
}
