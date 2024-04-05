import { createSlice } from '@reduxjs/toolkit';

import type { Review } from '../../types/reviews';

import { RequestStatus } from '../../const';
import { commentsThunk } from '../thunks/comments';

interface ReviewState {
  items: Review[];
  status: RequestStatus;
}

const initialState: ReviewState = {
  items: [],
  status: RequestStatus.Idle
};

export const reviewSlice = createSlice({
  extraReducers: (builder) => {
    // с помощтю fetchComments можно получить список всех комментариев
    builder.addCase(commentsThunk.fetchComments.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = RequestStatus.Success;
    });
    builder.addCase(commentsThunk.fetchComments.rejected, (state) => {
      state.status = RequestStatus.Failed;
    });
    builder.addCase(commentsThunk.fetchComments.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
    //также есть синхронный экшен на создание комментариев
    builder.addCase(commentsThunk.postComment.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
    builder.addCase(commentsThunk.postComment.rejected, (state) => {
      state.status = RequestStatus.Failed;
    });
    builder.addCase(commentsThunk.postComment.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
  },
  initialState,
  name: 'reviews',
  reducers: {},
  selectors: {
    reviews: (state : ReviewState) => state.items,
    reviewsStatus: (state : ReviewState) => state.status
  }
});

export const reviewActions = {
  ...reviewSlice.actions,
  ...commentsThunk
};
export const reviewSelector = reviewSlice.selectors;

