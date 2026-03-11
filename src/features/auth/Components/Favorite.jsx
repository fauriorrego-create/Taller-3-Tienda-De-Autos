import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Stack
} from "@mui/material";

import SpeedIcon from "@mui/icons-material/Speed";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";

import { useFavorites } from "../../view/hooks/useFavorites";
import { useShopping } from "../../auth/hooks/useShopping";

export const Favorite = () => {

  const { favorites, resetFavorites, removeFavorite } = useFavorites();
  const { addCart } = useShopping();

  return (

    <Container
      component="main"
      maxWidth="lg"
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 0 }
      }}
    >

      <Typography
        variant="h4"
        component="h1"
        fontWeight="bold"
        textAlign="center"
        mb={4}
      >
        Mis favoritos
      </Typography>

      {favorites.length > 0 && (
        <Box textAlign="center" mb={4}>
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon aria-hidden="true" />}
            onClick={resetFavorites}
            aria-label="Eliminar todos los autos de favoritos"
          >
            Limpiar favoritos
          </Button>
        </Box>
      )}

      {favorites.length === 0 && (
        <Typography textAlign="center">
          No tienes autos en favoritos
        </Typography>
      )}

      <Box
        role="list"
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

        {favorites.map((car) => (

          <Card
            key={car.id}
            role="listitem"
            sx={{
              height: "100%",
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

                <Typography fontWeight="bold" mb={2}>
                  {car.price}
                </Typography>

                <Stack spacing={1}>

                  <Box display="flex" justifyContent="center" gap={1}>
                    <SpeedIcon fontSize="small" aria-hidden="true" />
                    <Typography variant="body2">
                      {car.speed}
                    </Typography>
                  </Box>

                  <Box display="flex" justifyContent="center" gap={1}>
                    <LocalGasStationIcon fontSize="small" aria-hidden="true" />
                    <Typography variant="body2">
                      {car.fuel}
                    </Typography>
                  </Box>

                  <Box display="flex" justifyContent="center" gap={1}>
                    <SettingsIcon fontSize="small" aria-hidden="true" />
                    <Typography variant="body2">
                      {car.trans}
                    </Typography>
                  </Box>

                </Stack>

              </Box>

              <Stack spacing={1.5} mt={3}>

                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => addCart(car)}
                  aria-label={`Comprar ${car.name}`}
                >
                  Comprar
                </Button>

                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon aria-hidden="true" />}
                  fullWidth
                  onClick={() => removeFavorite(car.id)}
                  aria-label={`Eliminar ${car.name} de favoritos`}
                >
                  Quitar
                </Button>

              </Stack>

            </CardContent>

          </Card>

        ))}

      </Box>

    </Container>
  );
};