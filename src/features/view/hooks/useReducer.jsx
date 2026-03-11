import { useReducer } from "react";
import { Button, Typography } from "@mui/material";

function reducer(state, action) {
  switch (action.type) {
    case "agregar":
      return { total: state.total + action.precio };

    case "reset":
      return { total: 0 };

    default:
      return state;
  }
}

export default function Carrito() {
  const [state, dispatch] = useReducer(reducer, { total: 0 });

  return (
    <>
      <Typography component="h1" variant="h5">
        Total: ${state.total}
      </Typography>

      <Button
        onClick={() => dispatch({ type: "agregar", precio: 50 })}
      >
        Añadir Camiseta
      </Button>

      <Button
        onClick={() => dispatch({ type: "agregar", precio: 80 })}
      >
        Añadir Zapatos
      </Button>

      <Button onClick={() => dispatch({ type: "reset" })}>
        Vaciar carrito
      </Button>
    </>
  );
}