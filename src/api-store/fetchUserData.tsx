import axiosInstance from "./axiosInstance";

import User from "../components/UserDisplay/types/userTypes";

export const fetchUserData = async () => {
  try {
    const response = await axiosInstance.get("/api");
    if (response.status !== 200) throw new Error("Backend Server Error");

    const { email, name, picture, dob } = response.data.results[0];
    const userData: User = { email, name, picture, dob };

    localStorage.setItem("user", JSON.stringify(userData));
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
