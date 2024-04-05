import type { AxiosInstance } from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import type { User } from '../../types/user';

import { Endpoint } from '../../const';

// для проверки пользователя

const checkAuth = createAsyncThunk<User, undefined, { extra: AxiosInstance }>
('auth/checkAuth', async (_arg, { extra: api }) => {
  const response = await api.get<User>(Endpoint.Login);
  return response.data;
});

interface LoginData {
  email: string;
  password: string;
}

// для авторизации

const login = createAsyncThunk<User, LoginData, { extra: AxiosInstance }>
('auth/login', async (body, { extra: api }) => {
  const response = await api.post<User>(Endpoint.Login, body);
  return response.data;
});

// для выхода

const logout = createAsyncThunk<unknown, undefined, { extra: AxiosInstance }>
('auth/logout', async (_, { extra: api }) => {
  await api.delete(Endpoint.Logout);
});

export { checkAuth, login, logout };
