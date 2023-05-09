import axios from '@/lib/helpers/axios.helper';
import { AuthMeResponse } from '../interfaces/authme.interface';
import { SignUp } from '../interfaces/signup.interface';

const login = (data: { email: string; password: string }) => {
  return axios.post(`/auth/login`, data);
};

const createAccount = (data: SignUp) => {
  return axios.post(`/auth/sign-up`, data);
};

const authMe = () => {
  return axios.get<AuthMeResponse>(`/auth/me`);
};

const forgetPassword = () => {};

const changuePassword = () => {};

export { login, createAccount, authMe };
