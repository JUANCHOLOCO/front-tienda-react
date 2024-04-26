import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Product } from "../types/Product"
import { CardMedia } from '@mui/material';

interface Props {

    open: boolean
    handleClose: () => void
    product: Product
    };
  

export default function ToModal({open, handleClose,product}: Props) {
 

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {product.title}
        </DialogTitle>
        <CardMedia    
        sx={{ height: 200}}
        component={'img'}
        image={product.image}
        title={product.image}
        style={{
          width: '200',
          height: '200',
          objectFit: "contain",
        }}
        alt='green iguana'
      />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>{product.description}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}