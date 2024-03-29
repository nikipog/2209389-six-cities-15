import { PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import type { CityName } from '../../const';
import type { TOffer } from '../../types/offer';

//константа placesMock импортирована как offers для удобства
import offers from '../../mocks/places-mock';

interface OffersState {
  city: CityName;
  offers: TOffer[];
}
const initialState: OffersState = {
  city: DEFAULT_CITY.name,
  offers,
};
const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    setCity: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    },
  },
  selectors: {
    city: (state: OffersState) => state.city,
    offers: (state: OffersState) => state.offers,
  }
});
const offersActions = offersSlice.actions;
const offersSelectors = offersSlice.selectors;

export { offersActions, offersSlice, offersSelectors };
