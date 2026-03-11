import { useRef, useEffect } from "react";
import { TextField } from "@mui/material";

export default function AutoFocusInput() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <TextField
      label="Escribe tu usuario"
      inputRef={inputRef}
    />
  );
}