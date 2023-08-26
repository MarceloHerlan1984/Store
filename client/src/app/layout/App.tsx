import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Catalog from "../../features/catalog";
import './styles.css'
import Header from "./Header";
import { useEffect, useState } from "react";
import {Outlet} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useStoreContext } from "../context/StoreContext";
import { getCookie } from "../util/util";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";
 

function App() {
  const {setBasket}=useStoreContext()
  const [loading,setLoading]=useState(true)

useEffect(()=>{
  const buyerId=getCookie('buyerId')
  if(buyerId){
    agent.Basket.get()
    .then(basket=>setBasket(basket))
    .catch(error=>console.log(error))
    .finally(()=>setLoading(false))
  }else{
    setLoading(false)
  }
},[setBasket])



  const[darkMode,setDarkMode]=useState(false)
  const paletterType= darkMode ? 'dark' :'light';
  const theme=createTheme({
    palette:{
      mode:paletterType
    }
  })

  function handlethemChange(){
    setDarkMode(!darkMode)
  }

if(loading) return <LoadingComponent message="initialising app..."/>

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
       <Header darkMode={darkMode} handlethemChange={handlethemChange}/>
       <Container>
           <Outlet />
       </Container>
      
      
    </ThemeProvider>
  );
}

export default App

