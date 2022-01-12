import { navigate } from "@reach/router";
import axios from "axios";
import Cookies from "js-cookie";
import store from "store/configureStore";

import {
  BASE_URL,
  USER_BASE_URL,
  ORDER_BASE_URL,
  PAYMENT_BASE_URL,
  USER_BASE_CR_URL,
} from "../constants";
type RequestType = "user" | "base" | "order" | "payment" | "user_cr";

const MODULE_URL_MAP = {
  user: USER_BASE_URL,
  base: BASE_URL,
  order: ORDER_BASE_URL,
  payment: PAYMENT_BASE_URL,
  user_cr: USER_BASE_CR_URL,
};

class Service {
  getToken = () => {
    //   return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMTgxLCJ0eXBlIjoibG9naW4iLCJyb2xlIjoxNywiaWF0IjoxNjI4NTA3ODUzfQ.nmXM8_mkHwehZIFi7XX6_g8tR2o4l3EPsUufRIXQpLM'
    return Cookies.get("token");
  };

  removeToken = () => {
    Cookies.remove("token");
    return true;
  };
  get = async (url: string, type: RequestType = "base") => {
    return new Promise((resolve, reject) => {
      const localToken = this.getToken();
      const baseUrl = MODULE_URL_MAP[type];

      try {
        axios
          .get(`${baseUrl}${url}`, {
            headers: {
              Authorization: `${localToken}`,
            },
          })
          .then((res) => {
            return resolve({ data: res.data, status: res.status });
          })
          .catch((err) => {
            console.log({ err });
            if (err.isAxiosError && err.response) {
              const errResponse = err.response;
              if (err.response.status === 401) {
                store.dispatch({ type: "LOGOUT_USER" });
                this.removeToken();
                navigate("/");
              }
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

  post = (
    url: string,
    params: {},
    type: RequestType = "base",
    token: string = ""
  ) => {
    return new Promise((resolve, reject) => {
      const localToken = this.getToken();
      const baseUrl = MODULE_URL_MAP[type];

      try {
        axios
          .post(
            `${baseUrl}${url}`,
            { ...params },
            {
              headers: {
                Authorization: `${token ? "Bearer " + token : localToken}`,
              },
            }
          )
          .then((res) => {
            return resolve({ data: res.data, status: res.status });
          })
          .catch((err) => {
            console.log({ err });
            if (err.isAxiosError && err.response) {
              const errResponse = err.response;
              const errorMessage = errResponse?.data?.message?.message
                ? errResponse?.data?.message.message
                : errResponse?.data?.message;
              return reject({
                status: errResponse.status,
                message: errorMessage,
              });
            }
          });
      } catch (err) {
        return reject(err);
      }
    });
  };

  put = (
    url: string,
    params: {},
    type: RequestType = "base",
    token: string = ""
  ) => {
    return new Promise((resolve, reject) => {
      const localToken = this.getToken();
      const baseUrl = MODULE_URL_MAP[type];

      try {
        axios
          .put(
            `${baseUrl}${url}`,
            { ...params },
            {
              headers: {
                Authorization: `${token ? "Bearer " + token : localToken}`,
              },
            }
          )
          .then((res) => {
            return resolve({ data: res.data, status: res.status });
          })
          .catch((err) => {
            console.log({ err });
            if (err.isAxiosError && err.response) {
              const errResponse = err.response;
              const errorMessage = errResponse?.data?.message?.message
                ? errResponse?.data?.message.message
                : errResponse?.data?.message;
              return reject({
                status: errResponse.status,
                message: errorMessage,
              });
            }
          });
      } catch (err) {
        return reject(err);
      }
    });
  };

  patch = (
    url: string,
    params: {},
    type: RequestType = "base",
    token: string = ""
  ) => {
    return new Promise((resolve, reject) => {
      const localToken = this.getToken();
      const baseUrl = MODULE_URL_MAP[type];

      try {
        axios
          .patch(
            `${baseUrl}${url}`,
            { ...params },
            {
              headers: {
                Authorization: `${token ? "Bearer " + token : localToken}`,
              },
            }
          )
          .then((res) => {
            return resolve({ data: res.data, status: res.status });
          })
          .catch((err) => {
            console.log({ err });
            if (err.isAxiosError && err.response) {
              const errResponse = err.response;
              const errorMessage = errResponse?.data?.message?.message
                ? errResponse?.data?.message.message
                : errResponse?.data?.message;
              return reject({
                status: errResponse.status,
                message: errorMessage,
              });
            }
          });
      } catch (err) {
        return reject(err);
      }
    });
  };
}
export default new Service();
