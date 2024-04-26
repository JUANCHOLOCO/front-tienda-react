
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ToChip from './ToChip';
import ToRating from './ToRating';
import {  Stack } from '@mui/material';
import ToBtnAction from './ToBtnAction';
import { useState } from 'react';
import ToModal from './ToModal';
import { Product } from '../types/Product';

interface Props {
  item: Product
}

export default function ToCard({item}:Props) {

  

  const [isCheck, setValor] =useState(true)

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const handleCheck = () => {
      setValor(!isCheck)
  }

  return (
    <>
    
    
    <Card sx={{ maxWidth: 345, height:500}}>
      <Stack direction='row' m={2} spacing={2}>
      <ToChip/>
      </Stack>
      
      <CardMedia    
        sx={{ height: 200}}
        component={'img'}
        image={item.image}
        title={item.image}
        style={{
          width: '200',
          height: '200',
          objectFit: "contain",
        }}
        alt='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          <p>{item.title}</p>
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
      
        <ToRating/>
        </Typography>
      </CardContent>
      <CardActions sx={{
        display: "flex",
        justifyContent: "space-between",
      }}>
      <ToBtnAction isShow isCheck={isCheck} handleShow={handleClickOpen}/>
        <ToBtnAction isCheck={isCheck} handleCheck={handleCheck}/>
      </CardActions>
    </Card>
    <ToModal open={open} handleClose={handleClose} product={item}/>
    </>
  );
}