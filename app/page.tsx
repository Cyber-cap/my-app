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
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Link from "next/link";

// function Header(){
//   return (
//  <AppBar position="static">
// <Toolbar>
//   <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//     My appliceshion
//   </Typography>
//   <Button color="inherit">
//     Login
//   </Button>
// </Toolbar>

//  </AppBar>

//   );
// };

// function Header(){
// const [drawerOpen, setDrawer] = React.useState(false);
// const handleDrawerOpen = () => {
//   setDrawer(true);
// };
// const handleDrawerClouse = () => {
//   setDrawer(false);
// };

//   return (
//  <AppBar position="static">
// <Toolbar>
//   <Drawer open={drawerOpen} anchor="left">
//     <List>
//       <ListItem>
//       <Button onClick={handleDrawerClouse} color="inherit">
//          Clouse
//       </Button>
//       </ListItem>

//     <Link href="/AboutMe">
//       <ListItem>
//         <ListItemText primary="Страничка01" />
//       </ListItem>
//     </Link>

//     </List>
//   </Drawer>
//   <Button onClick={handleDrawerOpen} color="inherit">
//      Open
//   </Button>

//   <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//     My appliceshion
//   </Typography>
// </Toolbar>

//  </AppBar>

//   );
// };
function Content() {
  const [DialogStaite, setDialog] = React.useState(false);
  const handlerOpenDialog = () => {
    setDialog(true);
  };
  const handlerCloseDialog = () => {
    setDialog(false);
  };

  const [DialogStaite2, setDialog2] = React.useState(false);
  const handlerOpenDialog2 = () => {
    setDialog2(true);
  };
  const handlerCloseDialog2 = () => {
    setDialog2(false);
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to My Application
      </Typography>
      <Typography variant="body1" paragraph>
        This is a simple application using React and Material-UI.
      </Typography>
      <Button
        sx={{ marginRight: 20 }}
        variant="contained"
        color="primary"
        onClick={handlerOpenDialog}
      >
        Get Started
      </Button>
      <Dialog open={DialogStaite}>
        <DialogTitle>
          <Button onClick={handlerCloseDialog}>Clouse</Button>
        </DialogTitle>
      </Dialog>

      <Button onClick={handlerOpenDialog2} variant="contained" color="primary">
        Text Open
      </Button>

      <Dialog open={DialogStaite2}>
        <DialogTitle style={{ padding: "20px" }}>
          <Typography>
            Жизнь Мы рождены; вдыхаем жадно Природы мощные дары; Нам мнится —
            дышит беспощадно Жизнь, занесенная в миры. Что наша жизнь? Порыв
            нежданный? Случайный плод ее творца? Дитя миров благоуханных,
            Обломок вышнего венца? О, нет! Горящей жизни меру Не нам познать и
            разгадать. Она достойна лучшей веры, На нас — творца ее печать.
            Уходят годы в бесконечность, — Дарует новые творец. Всегда, везде —
            живая вечность, — Одно начало и конец.
          </Typography>
          <Box padding="20px">
            <Button
              style={{
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                padding: "10px",
              }}
              onClick={handlerCloseDialog2}
              variant="contained"
              color="primary"
            >
              Закрыть
            </Button>
          </Box>
        </DialogTitle>
      </Dialog>
    </Container>
  );
}

//  function Footer(){
//   return(
//      <Box sx={{ bgcolor: "background.paper", p: 6, mt: "auto" }} component="footer">
//        <Typography variant="body1">
//        My sticky footer can be found here.
//        </Typography>
//        <Typography variant="body2" color="text.secondary">
//        © 2024 My Application
//       </Typography>
//     </Box>

//   );
//  };

export default function Home() {
  return (
      <Content />
  );
}
