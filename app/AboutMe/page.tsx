"use client";
import React, { useState } from "react";
import {
  AppBar,
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
import App from "next/app";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Image from "public/kub.jpg";
import Link from 'next/link';


function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Button>Raz</Button>
            <Button>Dva</Button>
            <Button>Tri</Button>
            <Button>Chetire</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function Header() {
  return (
    <Box
      bgcolor="primary.main"
      color="white"
      display="flex"
      alignItems="center"
      marginTop={2}
    >
      <Typography variant="h3" fontWeight="bold" ml={6}>
        Кубика Рубика
      </Typography>
    </Box>
  );
}

function Content() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} marginTop={2}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={2}>
            <Paper>
              <Box 
                sx={{
                  width: "100%",
                  maxWidth: 420,
                  bgcolor: "background.paper",
                }}
              >
                <List>
                  <Link href="./AboutMe/GridCSS" style={{ color: 'inherit', textDecoration: 'inherit'}} >
                    <Typography textAlign="center" > Гриды CSS</Typography>
                  </Link>

                  <ListItemButton>Knopka 2</ListItemButton>

                  <ListItemButton>Knopka 3</ListItemButton>
                  <ListItemButton>Knopka 4</ListItemButton>
                  <ListItemButton>Knopka 5</ListItemButton>
                  <ListItemButton>Knopka 6</ListItemButton>
                </List>
              </Box>
              <Box>
                <Card>
                  <CardHeader
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                  />
                  <img
                    src="/kub.jpg"
                    alt="Paella dish"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Card>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper>
              <Box
                bgcolor="primary.main"
                color="white"
                display="flex"
                alignItems="center"
                marginTop={2}
              >
                <Typography variant="h6" fontWeight="bold" ml={4}>
                  Тот факт, что каждая грань куба состоит из трёх слоев по три
                  блока, имеет большое значение. Число три, кажется, обладает
                  специфическим смыслом, выражающимся в некоторых странных
                  связях между человеком и природой. Мать - Дитя - Отец. Небеса
                  - Земля - Преисподняя. Создание - Сохранение - Разрушение.
                  Рождение - Жизнь - Смерть.
                </Typography>
              </Box>
              <Box paddingTop={4} paddingBottom={4}>
                В 1974 году 29-летний Эрно Рубик (Erno Rubik), в будущем первый
                официальный миллионер восточно-европейского социалистического
                блока, а тогда обычный молодой преподаватель живущий в одной
                квартире с родителями, трудился на факультете интерьерного
                дизайна (Department of Interior Design) будапештской Академии
                прикладных искусств и ремесел (Academy of Applied Arts and
                Crafts). Он преподавал венгерским студентам промышленный дизайн
                и архитектуру. Увлекался также геометрией и трёхмерным
                предметным моделированием, находя его идеальным средством для
                развития в учащихся навыков пространственного воображения. Как
                это обычно и бывает с выдающимися изобретениями, проект кубика
                вынашивался не один год. В начале изобретение представляло собой
                набор из 27 деревянных кубиков с разноцветными гранями (всего 27
                х 6=156 цветных граней). По одной из версий, при помощи данного
                учебного пособия Рубик пытался втолковать непонятливым
                воспитанникам основы математической теории групп. Задача
                изобретателя была такова: заставить отдельные разноцветные
                кубики свободно вращаться на своих местах, не нарушая
                конструктивного единства всего приспособления.В дальнейшем
                пришлось отбросить всё лишнее: в своем первом кубике Рубик
                оставил всего 54 внешние грани: одноцветные у шести центральных
                кубиков, двухцветные у двенадцати боковых, и трёхцветные у
                восьми угловых. Ровно в таком виде мы и видим кубик Рубика
                сейчас. На вакантное место единственного внутреннего кубика был
                помещен цилиндрический скрепляющий механизм, который был прочно
                связан со всеми наружными кубиками, но позволял им свободно
                вращаться друг относительно друга. Так из учебного пособия,
                кубик Рубика стал игрушкой!
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={6}>
                  <Grid item xs={6}>
                    <Paper>
                      <img
                        src="/Diana.jpg"
                        alt="Diana"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper>
                      <img
                        src="/Price.jpg"
                        alt="Price"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
              <Box
                bgcolor="primary.main"
                color="white"
                display="flex"
                alignItems="center"
                marginTop={2}
              >
                <Typography variant="h6" fontWeight="bold" ml={6}>
                  Choose your style
                </Typography>
              </Box>

              <Box>
                <Grid
                  container
                  spacing={4}
                  justifyContent="center"
                  alignItems="center"
                  height="100vh"
                >
                  <Grid item xs={4} mt={2}>
                    <Paper>xs=4</Paper>
                    <img
                      src="/Kub1.jpg"
                      alt="Kub1"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Grid>
                  <Grid item xs={4} mt={2}>
                    <Paper>xs=4</Paper>
                    <img
                      src="/Kub2.jpg"
                      alt="Kub2"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Grid>
                  <Grid item xs={4} mt={2}>
                    <Paper>xs=4</Paper>
                    <img
                      src="/Kub3.jpg"
                      alt="Kub3"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Grid>
                  <Grid item xs={4} mt={2}>
                    <Paper>xs=4</Paper>
                    <img
                      src="/Kub4.jpg"
                      alt="Kub4"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Grid>
                  <Grid item xs={4} mt={2}>
                    <Paper>xs=4</Paper>
                    <img
                      src="/Kub5.jpg"
                      alt="Kub5"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Grid>
                  <Grid item xs={4} mt={2}>
                    <Paper>xs=4</Paper>
                    <img
                      src="/Kub6.jpg"
                      alt="Kub6"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

// export default function AboutMe(){
//   return(
//     <>
//     gfjhgkjhlkhjhgfghfjhgj
//     </>

//   );

// };

export default function AboutMe() {
  return (
    <>
      <Container maxWidth="lg">
        <NavBar />

        <Header />
        <Content />
      </Container>
    </>
  );
}
