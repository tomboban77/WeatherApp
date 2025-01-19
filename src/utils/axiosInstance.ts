import axios from 'axios'
import URLS from 'constants/urls'
import { mapErrorToMessage } from '../utils/errorHandler'

const axiosInstance = axios.create({
  baseURL: URLS.WEATHER_PAGE.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const appError = mapErrorToMessage(error)
    return Promise.reject(appError)
  },
)

export default axiosInstance
