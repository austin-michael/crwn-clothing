export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGOIES_START = "category/FETCH_CATEGOIES_START",
  FETCH_CATEGOIES_SUCCESS = "category/FETCH_CATEGOIES_SUCCESS",
  FETCH_CATEGOIES_FAILED = "category/FETCH_CATEGOIES_FAILED",
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
};
