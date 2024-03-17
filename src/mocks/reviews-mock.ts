import { TReviewType } from '../types/reviews';

const reviewsMock : TReviewType[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: '2024-02-28T21:00:00.327Z',
    rating: 2,
    user: {
      name: 'Mollie',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/9.jpg',
      isPro: true
    }
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    comment: 'The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.',
    date: '2024-02-22T21:00:00.327Z',
    rating: 2,
    user: {
      name: 'Max',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/7.jpg',
      isPro: false
    }
  }
];

export default reviewsMock;

