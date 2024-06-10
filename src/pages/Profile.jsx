import React, { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import { useParams } from "react-router-dom";

const Profile = ({ user }) => {
  const username = useParams().username;

  return (
    <div>
      <h1>Profile</h1>
      <p>{user ? "Logged in" : "Not logged in"}</p>
      <p>{username}</p>
    </div>
  );
};

export default AppLayout()(Profile);
