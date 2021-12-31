import { navigate } from "@reach/router";
import axios from "axios";
import Cookies from 'js-cookie'
import store from "store/configureStore";

import { BASE_URL, USER_BASE_URL } from "../constants";
type RequestType = "user" | "base";
class Service {

  getToken = () => {
    return Cookies.get('token')
  }

  removeToken = () => {
    Cookies.remove('token')
    return true
  }
  get = async (url: string, type: RequestType = "base") => {
    return new Promise((resolve, reject) => {
      const localToken = this.getToken()
   
            
      try {
        axios
          .get(`${type === "user" ? USER_BASE_URL : BASE_URL}${url}`, {
            headers: {
              Authorization: `${localToken}`
            }
          })
          .then((res) => {
            return resolve({ data: res.data, status: res.status });
          })
          .catch((err) => {
            console.log({ err })
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

  post = (url: string, params: {}, type: RequestType = "base", token: string = '') => {
    return new Promise((resolve, reject) => {
      const localToken = this.getToken()

      try {
        axios
          .post(`${type === "user" ? USER_BASE_URL : BASE_URL}${url}`, { ...params }, {
            headers: {
              Authorization: `${token ? 'Bearer '+token : localToken}`
            }

          })
          .then((res) => {
            return resolve({ data: res.data, status: res.status });
          })
          .catch((err) => {
            console.log({ err });
            if (err.isAxiosError && err.response) {
              const errResponse = err.response;
              const errorMessage = errResponse?.data?.message?.message
                ? errResponse?.data?.message.message
                : errResponse?.data?.message
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
