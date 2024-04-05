import type { AxiosInstance } from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ServerOffer, FullOffer } from '../../types/offer';
import { Endpoint } from '../../const';


const fetchAllOffers = createAsyncThunk<ServerOffer[], undefined, {extra: AxiosInstance}>
('fetchOffers/all', async (_arg, {extra: api}) => {
  const response = await api.get<ServerOffer[]>(`${Endpoint.Offers}`);
  return response.data;
});

const fetchOffer = createAsyncThunk<FullOffer, string, {extra: AxiosInstance}>
('fetchOffers/one', async (offerID, {extra: api}) => {
  const response = await api.get<FullOffer>(`${Endpoint.Offers}/${offerID}`);
  return response.data;
});

const fetchNearBy = createAsyncThunk<ServerOffer[], string, {extra: AxiosInstance}>
('fetchOffers/near', async (offerID, {extra : api}) => {
  const response = await api.get<ServerOffer[]>(`${Endpoint.Offers}/${offerID}/nearby`);
  return response.data;
});

export {fetchAllOffers, fetchOffer, fetchNearBy};
