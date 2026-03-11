import { useState } from "react";
import { TextField, Typography } from "@mui/material";

function useEscribiendo() {
  const [texto, setTexto] = useState("");

  const escribiendo = texto.length > 0;

  return { texto, setTexto, escribiendo };
}

export default function Chat() {
  const { texto, setTexto, escribiendo } = useEscribiendo();

  return (
    <>
      <TextField
        label="Mensaje"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <Typography>
        {escribiendo ? "El usuario está escribiendo..." : ""}
      </Typography>
    </>
  );
}