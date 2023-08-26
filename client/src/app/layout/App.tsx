import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Catalog from "../../features/catalog";
import './styles.css'
import Header from "./Header";
import { useState } from "react";
import {Outlet} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
 

function App() {
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

