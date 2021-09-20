import axios from "axios";
import { BASE_URL } from "../constants";

class Serivce {
  get = async (url: string) => {
    try {
      const res = await axios.get(`${BASE_URL}${url}`);
      return res;
    } catch (err) {
      return err.messages;
    }
  };
  post = async (url: string, params: {}) => {
    try {
      const res = await axios.post(`${BASE_URL}${url}`, { ...params });
      return res;
    } catch (err) {
      return err.messages;
    }
  };
}

export default new Serivce();
