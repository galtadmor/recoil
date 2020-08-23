import React from 'react';
import { Fab, withStyles } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const FixedFab = withStyles({
  root: {
    position: 'fixed',
    left: '50%',
    bottom: 24,
    transform: 'translate(-50%, -50%)'
  }
})(Fab);

export const AddToCart: React.FC<{}> = () => {
  return (
    <FixedFab color="secondary" variant="extended">
      <Add />
      <div>Add to Cart</div>
    </FixedFab>
  );
}