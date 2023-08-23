import { useState ,useEffect} from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog";
import './styles.css'

function App() {

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
    <div >
      <h1>REstire</h1>
      <Catalog products={products} addProduct={addProduct}/>
      
    </div>
  );
}

export default App

