import axios from "axios";

// Retrieve the token from local storage
const authToken = localStorage.getItem("authToken");

// Create an instance of Axios with custom headers
const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
});

export default axiosInstance;
