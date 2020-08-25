import React from 'react';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Fab, withStyles } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { selectedItemsState, addedToCartItemsState } from "state/atoms/cart";

const FixedFab = withStyles({
  root: {
    position: 'fixed',
    left: '50%',
    bottom: 24,
    transform: 'translate(-50%, -50%)'
  }
})(Fab);

export const AddToCart: React.FC<{}> = () => {
  const selectedItems = useRecoilValue(selectedItemsState);
  const setSelectedItems = useSetRecoilState(selectedItemsState);
  const addedToCartItems = useRecoilValue(addedToCartItemsState);
  const setAddedToCartItems = useSetRecoilState(addedToCartItemsState);
  const handleAddItemsToCart = () => {
    setAddedToCartItems([...addedToCartItems, ...selectedItems]);
    setSelectedItems([]);
  }
  return (
    <FixedFab color="secondary" variant="extended" onClick={handleAddItemsToCart}>
      <Add />
      <div>Add {selectedItems.length} items to Cart</div>
    </FixedFab>
  );
}