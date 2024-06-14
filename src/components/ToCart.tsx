import { ShoppingCart } from '@mui/icons-material';
import { Badge, Box, Button, Popover, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../store/cart';
import { TableCart } from './ToTableCart';

export const Cart = () => {
    const cart = useCart((state) => state.cart);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <>
            <Button title='Carrito'
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
            >
                <Badge badgeContent={cart.length} color="error">
                    <ShoppingCart fontSize="large" />
                </Badge>
                
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Box sx={{ p: 2 }}>
                    {cart.length === 0 ? (
                        <Typography variant="h6" p={2}>
                            Carro vacio
                        </Typography>
                    ) : (
                        <TableCart />
                    )}
                    <Link to={cart.length === 0 ? '' : '/store/cart'}>
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={() => handleClose()}
                            disabled={cart.length === 0}
                        >
                                ir al carro
                        </Button>
                    </Link>
                </Box>
            </Popover>
        </>
    );
};
