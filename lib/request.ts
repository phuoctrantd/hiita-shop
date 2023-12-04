import axios from "axios"
import { getAccessTokenFromStorage } from "./utils/localStorage"

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 60 * 1000, // request timeout
})

// Add a request interceptor
request.interceptors.request.use(
  async function (config) {
    const token = await getAccessTokenFromStorage()
    config.headers.Accept = "application/json"
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if (error.response.status == 401) {
      // window.location.href = "/login"
    }
    // Do something with response error
    return Promise.reject(error)
  }
)

export default request
