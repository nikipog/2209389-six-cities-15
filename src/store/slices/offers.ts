import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../const';
import { ServerOffer, FullOffer } from '../../types/offer';
import { fetchAllOffers } from '../thunks/offers';


interface OffersState {
  activeId?: FullOffer['id'] | null;
  offers: ServerOffer[];
  status: RequestStatus;
}

const initialState: OffersState = {
  activeId: null,
  offers: [],
  status: RequestStatus.Idle
};
const offersSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllOffers.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchAllOffers.rejected, (state) => {
        state.status = RequestStatus.Failed;
      }),
  initialState,
  name: 'offers',
  reducers: {
    setActiveId(state, action: PayloadAction<FullOffer['id'] | undefined>) {
      state.activeId = action.payload;
    }
  },
  selectors: {
    activeId: (state: OffersState) => state.activeId,
    offers: (state: OffersState) => state.offers,
    offersStatus: (state: OffersState) => state.status
  }
});

const offersActions = offersSlice.actions;
const offersSelectors = offersSlice.selectors;

export { offersActions, offersSlice, offersSelectors };

