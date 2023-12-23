import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

export const validationAPI = {
  loginApi(email, password) {
    return instance.post('/login', { email, password });
  },
  registrationApi(email, password) {
    return instance.post('/registration', { email, password });
  },
};

export const bookingAPI = {
  bookingApi(email, name, date) {
    return instance.post('/booking', { email, name, date });
  },
  bookingApi2(email, name, date) {
    return instance.put('/booking', { email, name, date });
  },
};
