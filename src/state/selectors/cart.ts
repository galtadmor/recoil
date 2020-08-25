import { selector } from "recoil";

import { addedToCartItemsState } from "state/atoms/cart";

export const addedToCartTotalPriceState = selector({
  key: 'addedToCartTotalPriceState',
  get: ({ get }) => {
    const addedToCartItems = get(addedToCartItemsState);
    return addedToCartItems.reduce((acc, item) => acc + item.price, 0);
  },
});
