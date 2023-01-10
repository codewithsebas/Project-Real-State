import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const {data} = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API,
      "X-RapidAPI-Host": process.env.RAPID_HOST,
    },
  });

  return data;
};