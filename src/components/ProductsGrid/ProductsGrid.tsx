import React from 'react';
import { useRecoilValue, useSetRecoilState } from "recoil";

import { Table, TableContainer, TableRow, TableHead, TableCell, TableBody, Paper, Avatar, Checkbox } from '@material-ui/core';

import { selectedItemsState } from "state/atoms/cart";
import { Product } from 'types/Product';
import { products } from 'data';

import styles from './ProductsGrid.module.scss';

export const ProductsGrid: React.FC<{}> = () => {
  const selectedItems = useRecoilValue(selectedItemsState);
  const setSelectedItems = useSetRecoilState(selectedItemsState);
  const handleSelection = (item: Product) => {
    if(selectedItems.find(i => i.title === item.title))
      setSelectedItems(selectedItems.filter(i => i.title !== item.title));
    else
      setSelectedItems([...selectedItems, item]);
  }
  return (
    <TableContainer component={Paper} style={{ height: 'calc(100vh - 200px)' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" />
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => {
            const { title, image, description, price } = product;
            return (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox
                    checked={selectedItems.find(i => i.title === title) ? true : false}
                    onChange={(e) => {
                      handleSelection(product);
                    }}
                  />
                </TableCell>
                <TableCell>
                  <div className={styles.title}>
                    <Avatar src={image} className={styles.image} />
                    <div>{title}</div>
                  </div>
                </TableCell>
                <TableCell>{description}</TableCell>
                <TableCell>${price.toFixed(2)}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}