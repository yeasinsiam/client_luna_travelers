import Axios from "axios";
// import Cookies from "js-cookie";

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  // headers: {
  //   // "X-Requested-With": "XMLHttpRequest",
  //   "X-CSRFToken": "Y9YSmCUOsESbsnODqWarzyTXhKWiIRHS",
  // },
  // withCredentials: true,
});

// Add a request interceptor to include the CSRF token
// axios.interceptors.request.use(
//   (config) => {
//     const token = Cookies.get("csrftoken");
//     if (token) {
//       config.headers["X-CSRFToken"] = token;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axios;
