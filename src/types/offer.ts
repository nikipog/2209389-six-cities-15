export type TLocationCoordinates = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TCity = {
  id?: string;
  name: string;
  location: TLocationCoordinates;
};

export type THost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}


interface ServerOffer {
  city: TCity;
  id: string;
  isFavorite: boolean;
  isPremium: boolean;
  location: TLocationCoordinates; // server location???
  previewImage?: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

type FullOffer = ServerOffer & {
  bedrooms: number;
  description: string;
  goods: string[];
  host: THost;
  images: string[];
  maxAdults: number;
}

export type { FullOffer, ServerOffer };

