import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";

import {
  createAction,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGOIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGOIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGOIES_FAILED,
  Error
>;

export type CategoryAction =
  | FetchCategoriesStart
  | FetchCategoriesSuccess
  | FetchCategoriesFailed;

export const fetchCategoriesStart = (): FetchCategoriesStart =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGOIES_START);

export const fetchCategoriesSuccess = (
  categoriesArray: Category[]
): FetchCategoriesSuccess =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGOIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailed = (error: Error): FetchCategoriesFailed =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGOIES_FAILED, error);
