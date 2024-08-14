"use client"
import React,{useState} from "react"
import { AppBar, Toolbar, Drawer, List, ListItem, ListItemText, ListItemButton, Typography, Container, Button, Box } from "@mui/material";


export default function Footer(){
    return(
        <Box sx={{ bgcolor: "background.paper", p: 6, mt: "auto" }} component="footer">
          <Typography variant="body1">
          My sticky footer can be found here.
          </Typography>
          <Typography variant="body2" color="text.secondary">
          © 2024 My Application
          </Typography>
        </Box>
    
      );
};