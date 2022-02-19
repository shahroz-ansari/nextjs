import axios from "axios";

export const __get = (url: string) =>
  axios
    .get(url)
    .then((res) => res.data)
    .catch((error) => {
      const e = new Error(JSON.stringify(error.response.data));
      throw e;
    });
