import React, { useState, useEffect } from "react";

import { fetchUserData } from "../../api-store/fetchUserData";

import User from "./types/userTypes";
import styles from "./UserDisplay.module.css";
import Loader from "../../utilities/Loader";
import UserInfo from "./UserInfo";

const UserDisplay: React.FC = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loader, setLoader] = useState<true | false>(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1500);
    const data = await fetchUserData();
    setUser(data);
  };

  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.mainContainer}>
      <h1>User Information</h1>
      <button onClick={fetchData}>Refresh</button>
      {loader ? (
        <Loader />
      ) : (
        <div className={styles.userInfo}>
          <div>
            <img
              src={user.picture.large}
              alt="profile-picture"
              loading="lazy"
            />
          </div>
          <div className={styles.data}>
            <UserInfo user={user} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDisplay;
