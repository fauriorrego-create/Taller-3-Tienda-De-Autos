import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
  Box,
  Stack
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SpeedIcon from "@mui/icons-material/Speed";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SettingsIcon from "@mui/icons-material/Settings";

import { useShopping } from "../../auth/hooks/useShopping";
import { useFavorites } from "../hooks/useFavorites";

export const Article = () => {
  const { addCart } = useShopping();
  const { toggleFavorite, isFavorite } = useFavorites();

  const cars = [
    { id:1, img:"auto1.jpg", name:"Ford Mustang", price:"$120.000", speed:"250 km/h", fuel:"Gasolina", trans:"Manual"},
    { id:2, img:"auto2.jpg", name:"Bugatti Centenario", price:"$250.000", speed:"380 km/h", fuel:"Gasolina", trans:"Automática"},
    { id:3, img:"auto3.jpg", name:"Dodge Challenger", price:"$320.000", speed:"290 km/h", fuel:"Gasolina", trans:"Automática"},
    { id:4, img:"auto4.jpg", name:"BMW Coupe", price:"$280.000", speed:"260 km/h", fuel:"Gasolina", trans:"Automática"},
    { id:5, img:"auto5.jpg", name:"Audi R8", price:"$410.000", speed:"330 km/h", fuel:"Gasolina", trans:"Automática"},
    { id:6, img:"auto6.jpg", name:"Lamborghini Huracán", price:"$500.000", speed:"325 km/h", fuel:"Gasolina", trans:"Automática"},
    { id:7, img:"auto7.jpg", name:"Ferrari F8", price:"$550.000", speed:"340 km/h", fuel:"Gasolina", trans:"Automática"},
    { id:8, img:"auto8.jpg", name:"Porsche 911", price:"$390.000", speed:"310 km/h", fuel:"Gasolina", trans:"Automática"},
    { id:9, img:"auto9.jpg", name:"Mercedes AMG GT", price:"$430.000", speed:"315 km/h", fuel:"Gasolina", trans:"Automática"},
    { id:10, img:"auto10.jpg", name:"McLaren 720S", price:"$600.000", speed:"341 km/h", fuel:"Gasolina", trans:"Automática"},
    { id:11, img:"auto11.jpg", name:"Tesla Model S", price:"$450.000", speed:"322 km/h", fuel:"Eléctrico", trans:"Automática"},
    { id:12, img:"auto12.jpg", name:"Aston Martin DB11", price:"$520.000", speed:"322 km/h", fuel:"Gasolina", trans:"Automática"}
  ];

  return (
    <main>

      {/* HERO VIDEO */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "80vh" },
          overflow: "hidden"
        }}
      >
        <Box
          component="img"
          src="/img/auto13.jpg"
          alt="Imagen promocional de autos deportivos"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)"
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#ffffff",
            textAlign: "center",
            px: 2
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            fontWeight="bold"
            sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
          >
            Grand Torque
          </Typography>

          <Typography
            component="p"
            variant="body1"
            sx={{ mt: 2, maxWidth: 600 }}
          >
            Descubre los mejores autos deportivos del mercado
          </Typography>
        </Box>
      </Box>

      {/* ESTADISTICAS */}
      <Container sx={{ py: 6 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          justifyContent="center"
          textAlign="center"
        >
          <Box>
            <Typography component="p" variant="h5" fontWeight="bold" color="text.primary">
              12+
            </Typography>
            <Typography component="p" color="text.secondary">
              Autos exclusivos
            </Typography>
          </Box>
          <Box>
            <Typography component="p" variant="h5" fontWeight="bold" color="text.primary">
              500+
            </Typography>
            <Typography component="p" color="text.secondary">
              Clientes satisfechos
            </Typography>
          </Box>
          <Box>
            <Typography component="p" variant="h5" fontWeight="bold" color="text.primary">
              10+
            </Typography>
            <Typography component="p" color="text.secondary">
              Marcas premium
            </Typography>
          </Box>
        </Stack>
      </Container>

      {/* LISTA DE AUTOS */}
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Typography component="h2" variant="h4" fontWeight="bold" textAlign="center" mb={6}>
          Artículos en el mercado
        </Typography>

        <Box
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
          {cars.map((car) => {
            const favorite = isFavorite(car.id);

            return (
              <Card
                key={car.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  transition: "0.25s",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: 6 }
                }}
              >
                <CardMedia
                  component="img"
                  image={`/img/${car.img}`}
                  alt={`Foto del auto ${car.name}`}
                  loading="lazy"
                  sx={{ height: 200, objectFit: "cover" }}
                />

                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", textAlign: "center" }}>
                  <Box>
                    <Typography component="p" variant="h6" fontWeight="bold">
                      {car.name}
                    </Typography>

                    <Typography component="p" fontWeight="bold" color="primary" mb={2}>
                      {car.price}
                    </Typography>

                    <Stack spacing={1}>
                      <Box display="flex" justifyContent="center" gap={1}>
                        <SpeedIcon fontSize="small" aria-hidden="true" />
                        <Typography component="p" variant="body2">
                          {car.speed}
                        </Typography>
                      </Box>

                      <Box display="flex" justifyContent="center" gap={1}>
                        <LocalGasStationIcon fontSize="small" aria-hidden="true" />
                        <Typography component="p" variant="body2">
                          {car.fuel}
                        </Typography>
                      </Box>

                      <Box display="flex" justifyContent="center" gap={1}>
                        <SettingsIcon fontSize="small" aria-hidden="true" />
                        <Typography component="p" variant="body2">
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
                      variant={favorite ? "contained" : "outlined"}
                      startIcon={<FavoriteBorderIcon aria-hidden="true" />}
                      fullWidth
                      onClick={() => toggleFavorite(car)}
                      aria-pressed={favorite}
                      aria-label={
                        favorite
                          ? `El auto ${car.name} está en favoritos`
                          : `Agregar ${car.name} a favoritos`
                      }
                      sx={{
                        bgcolor: favorite ? "error.dark" : "transparent",
                        color: favorite ? "common.white" : "text.primary",
                        borderColor: favorite ? "error.dark" : "divider",
                        "&:hover": {
                          bgcolor: favorite ? "error.main" : "action.hover"
                        }
                      }}
                    >
                      {favorite ? "Guardado" : "Agregar a favoritos"}
                    </Button>

                  </Stack>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        <Divider sx={{ my: 8 }} />
      </Container>
    </main>
  );
};
