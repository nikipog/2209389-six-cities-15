import { AxiosInstance } from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import type { FullOffer } from '../../types/offer';
import type { Review } from '../../types/reviews';

import { Endpoint } from '../../const';

//запрос к серверу на получение комментариев

const fetchComments = createAsyncThunk<Review[], FullOffer['id'], { extra: AxiosInstance }>
('comments/fetch', async (offerId, {extra : api}) => {
  const response = await api.get<Review[]>(`${Endpoint.Comments}/${offerId}`);
  return response.data;
});

interface PostCommentProps {
  body: {
    comment: string;
    rating: number;
  };
  offerId: FullOffer['id'];
}

//запрос к серверу на создание комменатриев (будет отправляться только для
// авторизованного пользователя. Будет успешным при наличии токена у пользователя)

const postComment = createAsyncThunk<Review, PostCommentProps, {extra: AxiosInstance}>
('comments/post', async ({ body, offerId }, { extra : api}) => {
  //отправляем на "ручку" body, который собираем внутри формы
  const response = await api.post<Review>(`${Endpoint.Comments}/${offerId}`, body);
  return response.data;
});

export const commentsThunk = { fetchComments, postComment};
