import { atom } from "recoil";

import { Product } from "types/Product";

export const selectedItemsState = atom<Product[]>({
  key: 'selectedItemsState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const addedToCartItemsState = atom<Product[]>({
  key: 'addedToCartItemsState',
  default: [],
});
