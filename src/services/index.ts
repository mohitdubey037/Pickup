import axios from "axios";
import { BASE_URL, USER_BASE_URL } from "../constants";
type RequestType = "user" | "base";

class Service {
  get = async (url: string, type: RequestType = "base") => {
    return new Promise((resolve, reject) => {
      try {
        axios
          .get(`${type === "user" ? USER_BASE_URL : BASE_URL}${url}`,{
            headers:{
              Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMDk3LCJ0eXBlIjoibG9naW4iLCJyb2xlIjozLCJidXNpbmVzc1JvbGUiOm51bGwsImNvbXBhbnkiOm51bGwsImlhdCI6MTYzNzIyODM1NX0.Is8pb06wYV75USsBlm1TaUMXTXdFofFdS5v_PNbZI8g"
            }
          })
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

  post = (url: string, params: {}, type: RequestType="base") => {
    return new Promise((resolve, reject) => {
      try {
        axios
        .post(`${type === "user" ? USER_BASE_URL : BASE_URL}${url}`,{ ...params } , { 
            headers:{
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMDk3LCJ0eXBlIjoibG9naW4iLCJyb2xlIjozLCJidXNpbmVzc1JvbGUiOm51bGwsImNvbXBhbnkiOm51bGwsImlhdCI6MTYzNzIyODM1NX0.Is8pb06wYV75USsBlm1TaUMXTXdFofFdS5v_PNbZI8g"
            }
         })
          .then((res) => {
            return resolve({ data: res.data, status: res.status });
          })
          .catch((err) => {
            console.log({ err });
            if (err.isAxiosError && err.response) {
              const errResponse = err.response;
              return reject({
                status: errResponse.status,
                message: errResponse?.data?.message?.message
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
export default new Service();
