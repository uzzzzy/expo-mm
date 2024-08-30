import axios from "axios";

const http = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

http.interceptors.request.use(
  (config) => {
    config.headers['X-Requested-With'] = new Date().getTime();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    const currentTime = new Date().getTime();
    const timestamp = response.config.headers['X-Requested-With'];

    console.log(`Request time: ${currentTime - timestamp}ms for ${response.config.url}`);

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;