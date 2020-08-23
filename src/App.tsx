import React from 'react';

import { Header, ProductsGrid, AddToCart } from 'components';

import styles from './App.module.scss';

const App: React.FC<{}> = () => {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <ProductsGrid />
        <AddToCart />
      </div>
    </div>
  );
}

export default App;
