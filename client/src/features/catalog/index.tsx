import { Button } from "@mui/material";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";

import { useState,useEffect } from "react";



export default function Catalog(){
    const [products,setProducts]=useState<Product[]>([])


function addProduct(){
  setProducts([{id:22,name:'product3',price:300,description:"camisa",pictureUrl:'none'}])
}

useEffect(()=>{
  fetch('http://localhost:5130/api/products')
    .then(response=>response.json())
    .then(data=>setProducts(data))

},[])
    return (
        <>
      <ProductList products={products}/>
      <Button variant="contained" onClick={addProduct}>Add product</Button>
        </>
    )
}
