import { Box, Button, Typography } from "@mui/material";
import "./styles.css";

export default function Home() {
  return (
    <>
      <Box padding={4}>
        <h1>my first app</h1>

        <Button variant="contained" color="primary">
          more
        </Button>

        <br />
        <br />

        <button className="button">click me</button>

        <Typography variant="h6" color="primary">
          Hello World
        </Typography>

        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>

        <li>four</li>
        <li>five</li>
        <li>six</li>
      </Box>
    </>
  );
}
