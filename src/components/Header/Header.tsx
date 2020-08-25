import React from "react";
import { useRecoilValue } from "recoil";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import { addedToCartItemsState } from "state/atoms/cart";
import { addedToCartTotalPriceState } from "state/selectors/cart";

import styles from "./Header.module.scss";

export const Header: React.FC<{}> = () => {
  const addedToCartItems = useRecoilValue(addedToCartItemsState);
  const addedToCartTotalPrice = useRecoilValue(addedToCartTotalPriceState);
  return (
    <AppBar>
      <Toolbar>
        <div className={styles.content}>
          <div className={styles.logo}>DaShop</div>
          <Typography component="div" color="primary" className={styles.cart}>
            <ShoppingCart />
            <div className={styles.summary}>
              <div>
                <span className={styles.summary__label}>Items:</span>
                <span>{addedToCartItems.length}</span>
              </div>
              <div className={styles.summary__separator}>/</div>
              <div>
                <span className={styles.summary__label}>Price:</span>
                <span>${addedToCartTotalPrice.toFixed(2)}</span>
              </div>
            </div>
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};
