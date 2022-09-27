import axios from 'axios';
import axiosRetry from 'axios-retry';
import { API_HOST } from '../common/consts';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = API_HOST;

axios.interceptors.request.use(request => {
  // request.headers['Content-Type'] = 'multipart/form-data';

  // TODO: Get tibas token from session
  // request.headers['x-tibas-token'] = '123'

  return request;
});

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;


axiosRetry(axios, {
  retries: 2,
  retryDelay: (retryCount) => {
    return retryCount * 2000; // interval between retries
  },
  retryCondition: (error) => {
    // if retry condition is not specified, by default idempotent requests are retried
    return error.response?.status === 503;
  },
});

export default axiosClient;