export interface navMenuTypes {
  id: number;
  name: string;
  path: string;
}

export interface categoryTypes {
  id: number;
  name: string;
  isChecked: boolean;
}

export interface brandTypes {
  id: number;
  name: string;
  isChecked: boolean;
}
export interface ImagesTypes {
  id: number;
  url: string;
}

export interface ProductType {
  id: number;
  title: string;
  price: number;
  thumline_image: string;
  images: ImagesTypes[];
  size: string[];
  rating: number;
  color: string[];
  popularity: boolean;
  category: string[];
  brand: string;
}
