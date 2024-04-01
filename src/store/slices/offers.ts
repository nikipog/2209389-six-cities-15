import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { TOffer } from '../../types/offer';

import offers from '../../mocks/places-mock';

type OffersState = {
  activeId?: TOffer['id'];
  offers: TOffer[];
};

const initialState: OffersState = {
  activeId: undefined,
  offers,
};
const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    setActiveId(state, action: PayloadAction<TOffer['id'] | undefined>) {
      state.activeId = action.payload;
    }
  },
  selectors: {
    activeId: (state) => state.activeId,
    offers: (state) => state.offers,
  }
});

const offersActions = offersSlice.actions;
const offersSelectors = offersSlice.selectors;

export { offersActions, offersSlice, offersSelectors };

