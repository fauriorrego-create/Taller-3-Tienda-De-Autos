import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Stack
} from "@mui/material";

import { useOnlineStatus } from "../hooks/useOnlineStatus";

import UseState from "../hooks/useState";
import UseEffect from "../hooks/useEffect";
import UseContext from "../hooks/useContext";
import UseRef from "../hooks/useRef";
import UseReducer from "../hooks/useReducer";
import UseCallback from "../hooks/useCallback";
import UseMemo from "../hooks/useMemo";
import CustomHooks from "../hooks/customHoocks";

export const Offer = () => {

  const isOnline = useOnlineStatus();

  const cards = [
    { id: "state", title: "useState", component: <UseState /> },
    { id: "effect", title: "useEffect", component: <UseEffect /> },
    { id: "context", title: "useContext", component: <UseContext /> },
    { id: "ref", title: "useRef", component: <UseRef /> },
    { id: "reducer", title: "useReducer", component: <UseReducer /> },
    { id: "callback", title: "useCallback", component: <UseCallback /> },
    { id: "memo", title: "useMemo", component: <UseMemo /> },
    { id: "custom", title: "Custom Hook", component: <CustomHooks /> },
  ];

  return (

    <Container
      component="main"
      maxWidth="md"
      sx={{ py: 8 }}
      aria-labelledby="hooks-title"
    >

      {/* Título principal */}

      <Typography
        id="hooks-title"
        variant="h4"
        component="h1"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
        Ejercicios React Hooks
      </Typography>

      <Stack spacing={3} mt={4} component="section">

        {cards.map((card) => (

          <Card
            component="article"
            key={card.id}
            aria-labelledby={`title-${card.id}`}
            sx={{
              width: "100%",
              minHeight: 180,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "0.25s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: 4
              }
            }}
          >

            <CardContent sx={{ textAlign: "center" }}>

              <Typography
                id={`title-${card.id}`}
                component="h2"
                variant="h6"
                mb={2}
              >
                {card.title}
              </Typography>

              {card.component}

            </CardContent>

          </Card>

        ))}

        {/* Estado de conexión */}

        <Card
          component="section"
          aria-labelledby="online-status-title"
          sx={{
            width: "100%",
            minHeight: 160,
            textAlign: "center"
          }}
        >

          <CardContent>

            <Typography
              id="online-status-title"
              component="h2"
              variant="h6"
            >
              Estado de conexión
            </Typography>

            <Box mt={2}>

              <Typography
                variant="body1"
                aria-live="polite"
                color={isOnline ? "success.main" : "error.main"}
              >
                {isOnline
                  ? "Conectado a internet"
                  : "Sin conexión a internet"}
              </Typography>

            </Box>

          </CardContent>

        </Card>

      </Stack>

    </Container>
  );
};
