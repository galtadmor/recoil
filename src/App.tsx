import React from 'react';
import { RecoilRoot } from 'recoil';

import { Header, ProductsGrid, AddToCart } from 'components';

import styles from './App.module.scss';

const App: React.FC<{}> = () => {
  return (
    <RecoilRoot>
      <Header />
      <div className={styles.content}>
        <ProductsGrid />
        <AddToCart />
      </div>
    </RecoilRoot>
  );
}

export default App;
