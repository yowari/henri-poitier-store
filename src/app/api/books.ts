export interface Book {
  isbn: string;
  title: string;
  price: number;
  cover: string;
  synopsis: string[];
}

export interface PercentageOffer {
  type: 'percentage';
  value: number;
}

export interface MinusOffer {
  type: 'minus';
  value: number;
}

export interface SliceOffer {
  type: 'slice';
  value: number;
  sliceValue: number;
}

export type Offer = PercentageOffer | MinusOffer | SliceOffer;
