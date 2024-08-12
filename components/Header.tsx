"use client"
import React,{useState} from "react"
import { AppBar, Toolbar, Drawer, List, ListItem, ListItemText, ListItemButton, Typography, Container, Button, Box } from "@mui/material";
import Link from 'next/link';




export default function Header(){
  const [drawerOpen, setDrawer] = React.useState(false);
  const handleDrawerOpen = () => {
    setDrawer(true);
  };
  const handleDrawerClouse = () => {
    setDrawer(false);
  };
  
  
  return ( 
    <AppBar position="static">
    <Toolbar>
    <Drawer open={drawerOpen} anchor="left">
    <List>
    <Link href="/">
    <ListItem>
    <Button onClick={handleDrawerClouse} color="primary">
    Home
    </Button>
    </ListItem>
    </Link>
    
    <Link href="/AboutMe"style= {{ textDecoration: 'none' }}  >
    <ListItem>
    <ListItemText primary={
      <Typography onClick={handleDrawerClouse} variant='overline' color={"primary"} align='center' style={{ display: 'flex', justifyContent: 'center' }}>
      Страничка01
      </Typography>
    } />
    </ListItem>
    </Link>
    
    <Link href="/AboutMe/Gallery"style= {{ textDecoration: 'none' }}  >
    <ListItem>
    <ListItemText primary={
      <Typography onClick={handleDrawerClouse} variant='overline' color={"primary"} align='center' style={{ display: 'flex', justifyContent: 'center' }}>
      Gallery
      </Typography>
    } />
    </ListItem>
    </Link>
    
    
    
    
    
    
    
    
    </List>
    </Drawer>
    <Button onClick={handleDrawerOpen} color="inherit">
    Open
    </Button>
    
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    My appliceshion 
    </Typography>
    </Toolbar>
    
    
    </AppBar>  
    
    
    
  ); 
};