import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Button, Card, CardActions, CardContent, CardMedia, Typography, Grid, CardHeader } from '@mui/material'
import React from 'react'
import { Product } from '../../app/models/product'
import { Link } from 'react-router-dom';


interface Props{
    products:Product[];

}

function ProductList({products}:Props) {
  return (
    <>
          <Grid container spacing={4}>
        {products.map((product)=>(
          <Grid item xs={3} key={product.id}>
                <Card >
                  <CardHeader avatar={
                    <Avatar sx={{bgcolor:'secondary.main'}}>
                      {product.name.charAt(0).toLocaleUpperCase()}
                    </Avatar>}
                    title={product.name}
                    titleTypographyProps={{sx: {fontWeight:'bold', color:'primary.main'}}}
                 />
                        <CardMedia
                          sx={{ height: 140,backgroundSize:'contain',bgcolor:'primary.light' }}
                          image={product.pictureUrl}
                          title={product.name}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div" color='secondary'>
                            ${(product.price/100).toFixed(2)}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                           {product.brand} /{product.type}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Add to Cart</Button>
                        <Button component={Link} to={`/catalog/${product.id}`} size="small">Views</Button>
                        </CardActions>
                      </Card>

          </Grid>
         
        
        ))}
      </Grid>
    </>
  )
}

export default ProductList