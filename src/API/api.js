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
    return instance.post('/reservation', { email, name, date });
  },
  bookingApi2() {
    return instance.get('/reservation');
  },
};
