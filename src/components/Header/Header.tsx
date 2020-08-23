import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import styles from './Header.module.scss';

export const Header: React.FC<{}> = () => {
  return (
    <AppBar>
      <Toolbar>
        <div className={styles.content}>
          <div className={styles.logo}>DaShop</div>
          <Typography color="primary" className={styles.cart}>
            <ShoppingCart />
            <div className={styles.summary}>
              <div>
                <span className={styles.summary__label}>Items:</span>
                <span>0</span>
              </div>
              <div className={styles.summary__separator}>/</div>
              <div>
                <span className={styles.summary__label}>Price:</span>
                <span>$0</span>
              </div>
            </div>
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}