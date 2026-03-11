import { useState, useMemo } from "react";
import { TextField, List, ListItem } from "@mui/material";

export default function FiltroProductos() {
  const [buscar, setBuscar] = useState("");

  const productos = ["Camisa", "Pantalón", "Zapatos", "Gorra"];

  const filtrados = useMemo(() => {
    return productos.filter((p) =>
      p.toLowerCase().includes(buscar.toLowerCase())
    );
  }, [buscar]);

  return (
    <>
      <TextField
        label="Buscar producto"
        onChange={(e) => setBuscar(e.target.value)}
      />

      <List>
        {filtrados.map((p, i) => (
          <ListItem key={i}>{p}</ListItem>
        ))}
      </List>
    </>
  );
}