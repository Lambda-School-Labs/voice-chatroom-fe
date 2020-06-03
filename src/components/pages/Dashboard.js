import React, { useState, useEffect } from "react";
import axios from "axios";
import { useOktaAuth } from "@okta/okta-react";

//imported Components
import Logout from "../buttons/Logout";
import UserHeader from "./UserHeader";
import Navbar from "../navigation/Navbar";

const Dashboard = () => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      setUserInfo(null);
    } else {
      console.log(authState);
      const accesstoken = authState.accessToken;
      localStorage.setItem("accessToken", accesstoken);
      authService.getUser().then((info) => {
        setUserInfo(info);
      });
    }
  }, [authState, authService]);

  return (
    <div className="dashContainer">
      <Navbar userInfo={userInfo} />
      <div className="user">
        {userInfo && <UserHeader user={userInfo} />}
        {authState.isAuthenticated && <Logout />}
      </div>
    </div>
  );
};

export default Dashboard;
