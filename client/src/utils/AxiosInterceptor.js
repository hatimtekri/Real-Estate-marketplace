import axios from "axios";

// Create an instance of axios with baseURL configured
const Axios = axios.create({
  baseURL: "http://localhost:8000/", // Replace this with your base URL
});

// Request interceptor
Axios.interceptors.request.use(
  async function (config) {
    // Do something before request is sent
    console.log("Request intercepted:", config);
    // For example, you can add an authorization token
    config.headers.Authorization = await getToken();
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Response interceptor
Axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    console.log("Response intercepted:", response);
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

// Asynchronous function to retrieve token
async function getToken() {
  // Simulated token retrieval, replace with actual logic
  return "Bearer <your_token>";
}

export { Axios };
