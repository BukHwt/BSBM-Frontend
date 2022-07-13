import axios from "axios";
import User from "../models/User";

const baseURL = process.env.REACT_APP_USER_API_URL || "";

export const getUserData = async (): Promise<User[]> => {
  return (await axios.get(baseURL)).data;
};

export const getSingleUserData = async (uid: string): Promise<User> => {
  return (await axios.get(`${baseURL}/${encodeURIComponent(uid)}`)).data;
};

export const sendNewUserData = async (
  uid: string,
  displayName: string
): Promise<User> => {
  return (
    await axios.post(baseURL, {
      uid,
      displayName,
    })
  ).data;
};
