import { Button } from "@mui/material";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";

import { useState,useEffect } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";



export default function Catalog(){
    const [products,setProducts]=useState<Product[]>([])
    const [loading,setLoading]=useState(true)


function addProduct(){
  setProducts([{id:22,name:'product3',price:300,description:"camisa",pictureUrl:'none'}])
}

useEffect(()=>{
  agent.Catalog.list()
  .then((products)=>setProducts(products))
  .catch(error=>console.log(error))
  .finally(()=>setLoading(false))

},[])

if(loading) return <LoadingComponent message={'Loading products..'}/>
    return (
        <>
      <ProductList products={products}/>
      <Button variant="contained" onClick={addProduct}>Add product</Button>
        </>
    )
}
