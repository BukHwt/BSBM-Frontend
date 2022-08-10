import axios from "axios";
import Mead from "../models/Mead";

const baseURL = process.env.REACT_APP_MEAD_API_URL || "";

export const getMeadData = async (): Promise<Mead[]> => {
  return (await axios.get(baseURL)).data;
};

export const getSingleMeadData = async (id: string): Promise<Mead> => {
  return (await axios.get(`${baseURL}/${encodeURIComponent(id)}`)).data;
};

export const sendNewMeadData = async (
  brewName: string,
  style: string,
  author: string,
  authorUID: string,
  volume: number,
  brewDate: string,
  honey: string,
  honeyVariety: string,
  honeyAmount: number,
  base: string,
  baseAmount: number,
  OG: number,
  FG: number,
  recipe: string
): Promise<Mead> => {
  return (
    await axios.post(baseURL, {
      brewName,
      style,
      author,
      authorUID,
      volume,
      brewDate,
      honey,
      honeyVariety,
      honeyAmount,
      base,
      baseAmount,
      OG,
      FG,
      recipe,
    })
  ).data;
};
