import axios from "axios";
import { BASE_URL } from "../constants";

class Serivce {
  get = async (url: string) => {
    return new Promise((resolve, reject) => {
      try {
        axios
          .get(`${BASE_URL}${url}`)
          .then((res) => {
            return resolve({ data: res.data, status: res.status });
          })
          .catch((err) => {
            if (err.isAxiosError && err.response) {
              const errResponse = err.response;
              return reject({
                status: errResponse.status,
                message: errResponse?.data?.message,
              });
            }
          });
      } catch (err) {
        return reject(err);
      }
    });
  };

  post = (url: string, params: {}) => {
    return new Promise((resolve, reject) => {
      try {
        axios
          .post(`${BASE_URL}${url}`, { ...params })
          .then((res) => {
            return resolve({ data: res.data, status: res.status });
          })
          .catch((err) => {
            if (err.isAxiosError && err.response) {
              const errResponse = err.response;
              return reject({
                status: errResponse.status,
                message: errResponse?.data?.message,
              });
            }
          });
      } catch (err) {
        return reject(err);
      }
    });
  };
 
}
export default new Serivce();
