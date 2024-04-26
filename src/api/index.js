const API_KEY = "43522216-812f41a2f1a230e967887a8e3";

const api_url = `https://pixabay.com/api/?key=${API_KEY}`;

const formatUrl = (params) => {
  let url = api_url + "&per_page=25&safesearch=true&editors_choice=true";

  if (!params) return url;
  let paramkeys = Object.keys(params);
  paramkeys.map((key) => {
    let value = key == "q" ? encodeURIComponent(paramkeys[key]) : params[key];
    url += `&${key}=${value}`;
  });

  return url;
};

import axios from "axios";
export const apiCall = async (params) => {
  try {
    const respose = await axios.get(formatUrl(params));
    return { success: true, data: respose.data };
  } catch (error) {
    console.log("got error", error.message);
    return { success: false, msg: error.message };
  }
};
