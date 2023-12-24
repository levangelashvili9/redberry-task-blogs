import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
  //   withCredentials: true
})

export default axiosInstance