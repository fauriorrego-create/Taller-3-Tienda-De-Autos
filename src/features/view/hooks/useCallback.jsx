import { useState, useCallback } from "react";
import { Button, Typography } from "@mui/material";

export default function Saludo() {
  const [nombre, setNombre] = useState("Andres");

  const saludar = useCallback(() => {
    alert(`Hola ${nombre}`);
  }, [nombre]);

  return (
    <>
      <Typography>Usuario: {nombre}</Typography>

      <Button onClick={saludar}>
        Saludar
      </Button>
    </>
  );
}