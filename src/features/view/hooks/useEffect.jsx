import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";

export default function Reloj() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <Box textAlign="center">
      <Typography component="h1" variant="h4">
        {hora.toLocaleTimeString()}
      </Typography>
    </Box>
  );
}