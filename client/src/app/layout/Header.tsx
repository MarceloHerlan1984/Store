import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom';


const midLinks=[
  {title:'catalog',path:'/catalog'},
  {title:'about',path:'/about'},
  {title:'contact',path:'/contact'}
]

const rightLinks=[
  {title:'login',path:'/login'},
  {title:'register',path:'/register'},

]

const navStyles={color:'inherit', typography:'h6', '&:hover':{color:'grey.500'},'&.active':{color:'text.secondary'},textDecoration:'none'}


interface Props{
    darkMode:boolean;
    handlethemChange: ()=>void;
}

function Header({darkMode,handlethemChange}:Props) {
  return (
    <AppBar position='static' sx={{mb: 4}}>
        
        <Toolbar sx={{display:'flex', justifyContent:'space-between', alignContent:'center'}}>
          <Box display='flex' alignItems='center'>
                  <Typography variant='h5' component={NavLink} 
                  to='/'
                  sx={navStyles}
                  > Lobo STORE</Typography>
                  <Switch checked={darkMode} onChange={handlethemChange}/>

          </Box>
            
            <List sx={{display:'flex'}}>
              {midLinks.map(({title,path})=>(
                <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={navStyles}
                >
                  {title.toUpperCase()}
                </ListItem>
              ))}

           
                 </List> 

                 <Box display='flex' alignItems='center'>
                <IconButton size='large' edge='start' color='inherit' sx={{mr:2}} >
                    <Badge badgeContent='0' color='secondary'>
                        <ShoppingCart />
                    </Badge>
                </IconButton>

            <List sx={{display:'flex'}}>
              {rightLinks.map(({title,path})=>(
                <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={navStyles}
                >
                  {title.toUpperCase()}
                </ListItem>
              ))}
            </List> 
              </Box>
          
        </Toolbar>
    </AppBar>
  )
}

export default Header