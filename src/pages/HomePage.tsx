import React from "react";
import { CommonHomeLayout } from "../components/CommonHomeLayout";
import { loggedUser } from "../models/LoggedUserData.ts";


const HomePage = () => {
  const type = loggedUser.type;

  return (
    <div>
      <CommonHomeLayout data={type}/>
    </div>
  );
};

export default HomePage;
