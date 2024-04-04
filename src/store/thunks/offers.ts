import type { AxiosInstance } from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ServerOffer } from '../../types/offer';

import { Endpoint } from '../../const';

const fetchAllOffers = createAsyncThunk<ServerOffer[], undefined, {extra: AxiosInstance}>
('fetchOffers/all', async (_arg, {extra: api}) => {
  const response = await api.get<ServerOffer[]>(Endpoint.Offers);
  return response.data;
});

export {fetchAllOffers};
