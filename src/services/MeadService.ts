import axios from "axios";
import Mead from "../models/Mead";

const baseURL = process.env.REACT_APP_MEAD_API_URL || "";

export const getMeadData = async (): Promise<Mead[]> => {
  return (await axios.get(baseURL)).data;
};

export const getSingleMeadData = async (uid: string): Promise<Mead> => {
  return (await axios.get(`${baseURL}/${encodeURIComponent(uid)}`)).data;
};

export const sendNewMeadData = async (
  uid: string,
  name: string
): Promise<Mead> => {
  return (
    await axios.post(baseURL, {
      uid,
      name,
    })
  ).data;
};
