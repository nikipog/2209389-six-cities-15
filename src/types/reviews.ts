export type TReviewerType = {
  name: string;
  avatarUrl: string;
  isPro?: boolean;
}

export type Review = {
  id: string;
  date: string;
  user: TReviewerType;
  comment: string;
  rating: number;
  };
