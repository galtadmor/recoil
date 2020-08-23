import React from 'react';
import { Table, TableContainer, TableRow, TableHead, TableCell, TableBody, Paper, Avatar, Checkbox } from '@material-ui/core';

import { products } from 'data';

import styles from './ProductsGrid.module.scss';

export const ProductsGrid: React.FC<{}> = () => {
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
                  <Checkbox />
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