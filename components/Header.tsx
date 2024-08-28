"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
  Container,
  Button,
  Box,
} from "@mui/material";
import Link from "next/link";

export default function Header() {
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
            <Link href="/" style={{ textDecoration: "none" }}>
              <ListItem>
                <Button onClick={handleDrawerClouse} color="primary">
                  Home
                </Button>
              </ListItem>
            </Link>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href="/AboutMe" style={{ textDecoration: "none" }}>
                <ListItem>
                  <Button
                    onClick={handleDrawerClouse}
                    variant="text"
                    color="primary"
                  >
                    Page 1
                  </Button>
                </ListItem>
              </Link>

              <Link href="/AboutMe/Gallery" style={{ textDecoration: "none" }}>
                <ListItem>
                  <Button
                    onClick={handleDrawerClouse}
                    variant="text"
                    color="primary"
                  >
                    Gallery
                  </Button>
                </ListItem>
              </Link>
            </div>
          </List>
        </Drawer>
        <Button onClick={handleDrawerOpen} color="inherit">
          Menu
        </Button>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My appliceshion
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
