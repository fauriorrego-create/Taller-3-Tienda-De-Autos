import { createContext, useContext, useState } from "react";
import { Button, Typography } from "@mui/material";

const IdiomaContext = createContext();

function Texto() {
  const idioma = useContext(IdiomaContext);

  return (
    <Typography  component="h1" variant="h5">
      {idioma === "es" ? "Bienvenido" : "Welcome"}
    </Typography>
  );
}

export default function IdiomaApp() {
  const [idioma, setIdioma] = useState("es");

  return (
    <IdiomaContext.Provider value={idioma}>
      <Button onClick={() => setIdioma("es")}>Español</Button>
      <Button onClick={() => setIdioma("en")}>English</Button>

      <Texto />
    </IdiomaContext.Provider>
  );
}