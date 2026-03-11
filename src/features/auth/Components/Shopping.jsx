import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Stack,
  IconButton,
  Divider
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useShopping } from "./../hooks/useShopping";

export const Shopping = () => {

  const {
    cart,
    removeCart,
    increaseQty,
    decreaseQty,
    clearCart
  } = useShopping();

  return (

    <Container
      component="main"
      maxWidth="lg"
      aria-labelledby="titulo-carrito"
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 0 }
      }}
    >

      <Typography
        id="titulo-carrito"
        variant="h4"
        component="h1"
        fontWeight="bold"
        textAlign="center"
        mb={4}
      >
        Mi carrito
      </Typography>

      {cart.length > 0 && (
        <Box textAlign="center" mb={4}>
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon aria-hidden="true" />}
            onClick={clearCart}
            aria-label="Vaciar todo el carrito"
          >
            Vaciar carrito
          </Button>
        </Box>
      )}

      {cart.length === 0 && (
        <Typography
          textAlign="center"
          role="status"
        >
          Tu carrito está vacío
        </Typography>
      )}

      <Box
        role="list"
        aria-label="Lista de productos en el carrito"
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)"
          },
          gap: { xs: 3, md: 4 }
        }}
      >

        {cart.map((car) => (

          <Card
            key={car.id}
            role="listitem"
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: 3,
              transition: "0.25s",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: 6
              }
            }}
          >

            <CardMedia
              component="img"
              image={`/img/${car.img}`}
              alt={`Imagen del auto ${car.name}`}
              loading="lazy"
              sx={{
                height: 200,
                objectFit: "cover"
              }}
            />

            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "center"
              }}
            >

              <Box>

                <Typography
                  variant="h6"
                  component="h2"
                  fontWeight="bold"
                >
                  {car.name}
                </Typography>

                <Typography
                  fontWeight="bold"
                  color="primary"
                  sx={{ mb: 1 }}
                >
                  {car.price}
                </Typography>

                <Divider sx={{ my: 1 }}/>

                <Typography color="text.secondary">
                  Cantidad en carrito
                </Typography>

                <Typography
                  fontSize={22}
                  fontWeight="bold"
                  aria-live="polite"
                >
                  {car.qty}
                </Typography>

              </Box>

              <Stack
                direction="row"
                justifyContent="center"
                spacing={1}
                mt={2}
              >

                <IconButton
                  color="primary"
                  aria-label={`Disminuir cantidad de ${car.name}`}
                  onClick={() => decreaseQty(car.id)}
                >
                  <RemoveIcon aria-hidden="true"/>
                </IconButton>

                <IconButton
                  color="primary"
                  aria-label={`Aumentar cantidad de ${car.name}`}
                  onClick={() => increaseQty(car.id)}
                >
                  <AddIcon aria-hidden="true"/>
                </IconButton>

                <IconButton
                  color="error"
                  aria-label={`Eliminar ${car.name} del carrito`}
                  onClick={() => removeCart(car.id)}
                >
                  <DeleteIcon aria-hidden="true"/>
                </IconButton>

              </Stack>

            </CardContent>

          </Card>

        ))}

      </Box>

    </Container>
  );
};