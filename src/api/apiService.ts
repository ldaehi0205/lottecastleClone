import axios from 'axios';

export const apiService = axios.create({
  timeout: 5000,
  timeoutErrorMessage: 'Request Timeout',
});

apiService.interceptors.response.use(res => res.data);
