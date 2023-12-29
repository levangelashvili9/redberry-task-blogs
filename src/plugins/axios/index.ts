import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
  }
  //   withCredentials: true
})

export default axiosInstance
