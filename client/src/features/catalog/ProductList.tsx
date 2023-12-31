import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Button, Card, CardActions, CardContent, CardMedia, Typography, Grid, CardHeader } from '@mui/material'
import React, { useState } from 'react'
import { Product } from '../../app/models/product'
import { Link } from 'react-router-dom';
import agent from '../../app/api/agent';
import { LoadingButton } from '@mui/lab';
import { useStoreContext } from '../../app/context/StoreContext';


interface Props{
    products:Product[];

}

function ProductList({products}:Props) {
const [loading,setLoading]=useState(false)
const {setBasket}=useStoreContext()

function handleAddItem(productId:number){
  setLoading(true);
  agent.Basket.addItem(productId)
  .then(basket=>setBasket(basket))
  .catch(error=>console.log(error))
  .finally(()=>setLoading(false))
}

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
                          <LoadingButton loading={loading} onClick={()=>handleAddItem(product.id)}>Add to Cart</LoadingButton>
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