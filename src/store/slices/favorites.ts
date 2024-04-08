import { createSlice } from '@reduxjs/toolkit';

import type { ServerOffer } from '../../types/offer';

import { FavoritesStatus, RequestStatus } from '../../const';
import { changeFavorite, fetchFavorites } from '../thunks/favorites';

interface FavoritesState {
  items: ServerOffer[];
  status: RequestStatus;
}

const initialState: FavoritesState = {
  items: [],
  status: RequestStatus.Idle,
};

export const favoritesSlice = createSlice({
  extraReducers(builder) {
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = RequestStatus.Success;
    });
    builder.addCase(fetchFavorites.rejected, (state) => {
      state.status = RequestStatus.Failed;
    });
    builder.addCase(fetchFavorites.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
    builder.addCase(changeFavorite.fulfilled, (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.offer.id);
      if (index >= 0) {
        // Обновляем элемент, если он найден
        state.items[index] = action.payload.offer;
      } else {
        // Добавляем или ничего не делаем в зависимости от статуса
        if (action.payload.status === FavoritesStatus.Added) {
          state.items.push(action.payload.offer);
        }
      }
    });
    builder.addCase(changeFavorite.rejected, (state) => {
      state.status = RequestStatus.Failed;
    });
    builder.addCase(changeFavorite.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
  },
  initialState,
  name: 'favorites',
  reducers: {},
  selectors: {
    favoriteStatus: (state: FavoritesState) => state.status,
    favorites: (state: FavoritesState) => state.items
  }
});

export const favoritesActions = {
  ...favoritesSlice.actions,
  changeFavorite,
  fetchFavorites
};

export const favoritesSelector = favoritesSlice.selectors;

