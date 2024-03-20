import axios, { AxiosResponse } from "axios";
import { CommonConstants } from "./CommonConstants";
import md5 from "md5";

const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_PRIVATE_KEY;
const baseURL = import.meta.env.VITE_BASE_URL;

const createURL = (limit?:number,offset:number = 0,searchQuery:string='') => {
  // Get the current timestamp

  // Create a new URLSearchParams object and set the necessary query parameters
  let params: any = {
    limit: limit,
    offset: offset,
  };
  if (searchQuery) {
    params.nameStartsWith = searchQuery;
  }

  return params;
};

// const getData = async () => {
//   const url = createURL();
//   try {
//     // const response: any = await axiosGet(url, "/v1/public/characters?");
//   } catch (error: any) {
//     console.error(error?.message);
//   }
// };

const axiosGet = (reqUrl: any, endUrl?: string, reqBody?: any) => {
  const ts = Date.now();

  reqUrl.apikey = publicKey;
  reqUrl.hash = md5(ts.toString() + privateKey + publicKey);
  reqUrl.ts = ts.toString();
  reqUrl = new URLSearchParams(reqUrl);

  // Construct the endpoint URL for searching comics with the query parameters
  const endpoint = `${baseURL}${endUrl}`;

  // Combine the endpoint URL with the query parameters to form the complete API request URL
  reqUrl = endpoint + reqUrl;

  if (!reqBody) {
    reqBody = {};
  }

  return new Promise((resolve, reject) => {
    axios
      .get(reqUrl, { params: reqBody })

      .then(function (response: any) {
        if (response.status == CommonConstants.API_RESPONSE_SUCCESSFUL) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(function (error: any) {
        if (error.response) {
          if (
            error.response.status ==
            CommonConstants.API_RESPONSE_UNAUTHORIZED_ACCESS
          ) {
          } else {
            console.log("error", error.response.data.error);
          }
        } else if (error.request) {
          console.log(
            "error on the server and the request could not be completed.",
            error.request
          );
        }
        reject(error);
      });
  });
};

const axiosPost = (reqUrl: string, reqBody: any) => {
  let baseURL = process.env.VITE_BASE_URL;
  return new Promise((resolve, reject) => {
    axios
      .post(baseURL + reqUrl, reqBody)
      .then(function (response: any) {
        if (
          response.status == CommonConstants.API_RESPONSE_SUCCESSFUL ||
          CommonConstants.API_RESPONSE_ACCEPTED
        ) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(function (error: any) {
        if (error.response) {
          if (
            error.response.status ==
            CommonConstants.API_RESPONSE_UNAUTHORIZED_ACCESS
          ) {
            // window.location.href = "http://localhost:3000/";
          }
          console.log("err", error.response);
          if (
            error.response.status ===
            CommonConstants.API_RESPONSE_CONFLICTS_IN_REQUEST
          ) {
            reject(error);
          } else {
            console.log("error", error.response.data.error);
          }
        } else if (error.request) {
          console.log(
            "error on the server and the request could not be completed.",
            error.request
          );
        }
        reject(error);
      });
  });
};

const axiosUpdate = (reqUrl: string, reqBody: any) => {
  let baseURL = process.env.VITE_BASE_URL;

  return new Promise((resolve, reject) => {
    axios
      .put(baseURL + reqUrl, reqBody)

      .then(function (response: any) {
        if (
          response.status == CommonConstants.API_RESPONSE_SUCCESSFUL ||
          CommonConstants.API_RESPONSE_ACCEPTED
        ) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(function (error: any) {
        if (error.response) {
          if (
            error.response.status ==
            CommonConstants.API_RESPONSE_UNAUTHORIZED_ACCESS
          ) {
          }
          if (
            error.response.status ===
            CommonConstants.API_RESPONSE_CONFLICTS_IN_REQUEST
          ) {
            reject(error);
          } else {
            console.log("error", error.response.data.error);
          }
        } else if (error.request) {
          console.log(
            "error on the server and the request could not be completed.",
            error.request
          );
        }
        reject(error);
      });
  });
};

const axiosPatch = (reqUrl: string, reqBody: any) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(baseURL + reqUrl, reqBody)
      .then(function (response: any) {
        if (
          response.status == CommonConstants.API_RESPONSE_SUCCESSFUL ||
          CommonConstants.API_RESPONSE_ACCEPTED
        ) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(function (error: any) {
        if (error.response) {
          if (
            error.response.status ==
            CommonConstants.API_RESPONSE_UNAUTHORIZED_ACCESS
          ) {
            window.location.href = "http://localhost:3000/";
          }
          if (
            error.response.status ===
            CommonConstants.API_RESPONSE_CONFLICTS_IN_REQUEST
          ) {
            resolve(error);
          } else {
            console.log("error", error.response.data.error);
          }
        } else if (error.request) {
          console.log(
            "error on the server and the request could not be completed.",
            error.request
          );
        }
        reject(error);
      });
  });
};

const axiosDelete = (reqUrl: string) => {
  let baseURL = process.env.VITE_BASE_URL;

  return new Promise((resolve, reject) => {
    axios
      .delete(baseURL + reqUrl)

      .then(function (response: any) {
        if (response.status == CommonConstants.API_RESPONSE_SUCCESSFUL) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(function (error: any) {
        if (error.response) {
          if (
            error.response.status ==
            CommonConstants.API_RESPONSE_UNAUTHORIZED_ACCESS
          ) {
            window.location.href = "http://localhost:3000/";
          } else {
            console.log("error", error.response.data.error);
          }
        } else if (error.request) {
          console.log(
            "error on the server and the request could not be completed.",
            error.request
          );
        }
        reject(error);
      });
  });
};

const axiosGetParams = (reqUrl: string) => {
  let baseURL = process.env.VITE_BASE_URL;

  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + reqUrl)
      .then(function (response: AxiosResponse) {
        if (response.status == CommonConstants.API_RESPONSE_SUCCESSFUL) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(function (error: any) {
        if (error.response) {
          if (
            error.response.status ==
            CommonConstants.API_RESPONSE_UNAUTHORIZED_ACCESS
          ) {
            window.location.href = "http://localhost:3000/";
          } else {
            console.log("error", error.response.data.error);
          }
        } else if (error.request) {
          console.log(
            "error on the server and the request could not be completed.",
            error.request
          );
        }
        reject(error);
      });
  });
};

export {
  axiosGet,
  axiosPost,
  axiosUpdate,
  axiosPatch,
  // Toast,
  axiosGetParams,
  axiosDelete,
};
