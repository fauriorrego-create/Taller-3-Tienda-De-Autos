import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

export default function ColorSelector() {
  const [color, setColor] = useState("white");

  return (
    <Box
      sx={{
        backgroundColor: color,
        p: 5,
        textAlign: "center",
        borderRadius: 2
      }}
    >
      <Typography component="h1" variant="h5">Color actual: {color}</Typography>

      <Button onClick={() => setColor("lightblue")} sx={{ m: 1 }}>
        Azul
      </Button>

      <Button onClick={() => setColor("lightgreen")} sx={{ m: 1 }}>
        Verde
      </Button>

      <Button onClick={() => setColor("lightcoral")} sx={{ m: 1 }}>
        Rojo
      </Button>
    </Box>
  );
}