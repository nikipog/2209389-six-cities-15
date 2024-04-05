import { createSlice } from '@reduxjs/toolkit';
import type { FullOffer, ServerOffer } from '../../types/offer';

import { RequestStatus } from '../../const';
import { fetchNearBy, fetchOffer } from '../thunks/offers';

interface OfferState {
  info: FullOffer | null;
  nearby: ServerOffer[];
  status: RequestStatus;
}

//начальное состояние
const initialState: OfferState = {
  // храним объект предложения, важно указывать null вместо пустого объекта!
  info: null,
  //здесь хранятся предложения рядом
  nearby: [],
  //состояние
  status: RequestStatus.Idle
};

//в экстра-редьюсере обрабатываем асинхронные экшены на получение оффера и предложений поблизости

export const offerSlice = createSlice({
  extraReducers: (builder) => {
    // в случае успеха получения оффера:
    builder.addCase(fetchOffer.fulfilled, (state, action) => {
      // обновляем поле инфо
      state.info = action.payload;
      state.status = RequestStatus.Success;
    });
    //если не получили - указываем статус
    builder.addCase(fetchOffer.rejected, (state) => {
      state.status = RequestStatus.Failed;
    });
    // если загружается - указываем статус
    builder.addCase(fetchOffer.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
    // в случае успеха получения мест поблизости
    builder.addCase(fetchNearBy.fulfilled, (state, action) => {
      //записываем полезную нагрузку из экшена в поле nearby
      state.nearby = action.payload;
    });
  },
  initialState,
  name: 'offer',
  reducers: {
    clear(state) {
      state.info = null;
      state.nearby = [];
    }
  },
  // обязательно пользоваться селекторами: на получения мест поблизости, оффера и статуса
  selectors: {
    nearbyOffers: (state: OfferState) => state.nearby,
    offer: (state: OfferState) => state.info,
    offerStatus: (state: OfferState) => state.status
  }
});

export const offerActions = {...offerSlice.actions, fetchNearBy, fetchOffer}; //асинхронные экшены на получение оффера и "рядом"
export const offerSelector = offerSlice.selectors;


