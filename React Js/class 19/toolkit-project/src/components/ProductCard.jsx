import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../redux/slices/addToCartSlice';

export default function ProductCard({ product }) {
    const dispatch = useDispatch()

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={product.image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            {/* <CardActions> */}
            <Button variant='contained'
                onClick={() => {
                    dispatch(addCart(product))
                }}
            >ADD TO CART</Button>

            {/* </CardActions> */}
        </Card>
    );
}