import axios from "axios";
import { BASE_URL, USER_BASE_URL } from "../constants";
type RequestType = null | undefined | string;
class Serivce {
  get = async (url: string, type?: RequestType) => {
    return new Promise((resolve, reject) => {
      try {
        axios
          .get(`${type ? USER_BASE_URL : BASE_URL}${url}`)
          .then((res) => {
            return resolve({ data: res.data, status: res.status });
          })
          .catch((err) => {
            if (err.isAxiosError && err.response) {
              const errResponse = err.response;
              return reject({
                status: errResponse.status,
                message: errResponse?.data?.message || errResponse?.message,
              });
            }
          });
      } catch (err) {
        return reject(err);
      }
    });
  };

  post = (url: string, params: {}, type?: RequestType) => {
    return new Promise((resolve, reject) => {
      try {
        axios
          .post(`${type ? USER_BASE_URL : BASE_URL}${url}`, { ...params })
          .then((res) => {
            return resolve({ data: res.data, status: res.status });
          })
          .catch((err) => {
            console.log({ err });
            if (err.isAxiosError && err.response) {
              const errResponse = err.response;
              return reject({
                status: errResponse.status,
                message: errResponse?.data?.message.message
                  ? errResponse?.data?.message.message
                  : errResponse?.data?.message,
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
