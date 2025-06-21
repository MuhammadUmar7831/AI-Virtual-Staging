import axios from "axios";
import { toast } from "react-hot-toast";
import { SERVER_BASE_URL } from "@/lib/constants";

axios.defaults.baseURL = SERVER_BASE_URL;

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

axios.interceptors.response.use(
  response => {
    if (response?.data?.status === "error") {
      toast.error(response.data.message || "Something went wrong");
      return Promise.reject(response);
    }

    return response;
  },
  error => {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "An unexpected error occurred";

    toast.error(message);

    return Promise.reject(error);
  }
);


export default axios;
