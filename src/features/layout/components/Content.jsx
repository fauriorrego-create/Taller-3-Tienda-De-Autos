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
import SecurityIcon from "@mui/icons-material/Security";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Link as RouterLink } from "react-router-dom";

export const Content = () => {

  const products = [
    { img: "/img/auto1.jpg", name: "Ford Mustang", price: "$120.000" },
    { img: "/img/auto2.jpg", name: "Bugatti Centenario", price: "$250.000" },
    { img: "/img/auto3.jpg", name: "Dodge Challenger", price: "$320.000" },
    { img: "/img/auto4.jpg", name: "BMW Coupe", price: "$320.000" },
    { img: "/img/auto5.jpg", name: "Audi R8", price: "$410.000" }
  ];

  return (

    <main>

      {/* HERO */}

      <Box
        component="section"
        aria-labelledby="hero-title"
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "80vh" },
          overflow: "hidden"
        }}
      >

        <Box
          component="img"
          src="/img/auto14.jpg"
          alt="Auto deportivo de alto rendimiento promocional"
          loading="eager"
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
            textAlign: "center",
            color: "white",
            px: 2
          }}
        >

          <Typography
            id="hero-title"
            variant="h3"
            component="h1"
            fontWeight="bold"
          >
            Tecnología que transforma tu mundo
          </Typography>

          <Typography
            component="p"
            sx={{ mt: 2, maxWidth: 600 }}
          >
            Descubre autos de alto rendimiento con el mejor diseño
            y la tecnología más avanzada.
          </Typography>

          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/shopping"
            sx={{ mt: 4 }}
          >
            Comprar ahora
          </Button>

        </Box>

      </Box>

      {/* CARACTERISTICAS */}

      <Container
        component="section"
        aria-labelledby="features-title"
        sx={{ py: 8 }}
      >

        <Typography
          id="features-title"
          variant="h4"
          component="h2"
          textAlign="center"
          fontWeight="bold"
          mb={5}
        >
          Características
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          justifyContent="center"
          textAlign="center"
        >

          <Box>

            <SpeedIcon sx={{ fontSize: 40, mb: 1 }} aria-hidden />

            <Typography component="h3" fontWeight="bold">
              Máximo rendimiento
            </Typography>

            <Typography color="text.secondary">
              Autos diseñados para velocidad y potencia.
            </Typography>

          </Box>

          <Box>

            <SecurityIcon sx={{ fontSize: 40, mb: 1 }} aria-hidden />

            <Typography component="h3" fontWeight="bold">
              Seguridad avanzada
            </Typography>

            <Typography color="text.secondary">
              Tecnología de seguridad de última generación.
            </Typography>

          </Box>

          <Box>

            <LocalShippingIcon sx={{ fontSize: 40, mb: 1 }} aria-hidden />

            <Typography component="h3" fontWeight="bold">
              Envío internacional
            </Typography>

            <Typography color="text.secondary">
              Compra desde cualquier lugar del mundo.
            </Typography>

          </Box>

        </Stack>

      </Container>

      {/* PRODUCTOS */}

      <Container
        component="section"
        aria-labelledby="products-title"
        sx={{ pb: 8 }}
      >

        <Typography
          id="products-title"
          variant="h4"
          component="h2"
          fontWeight="bold"
          textAlign="center"
          mb={4}
        >
          Autos destacados
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            pb: 2,
            scrollSnapType: "x mandatory",
            "&::-webkit-scrollbar": { display: "none" }
          }}
        >

          {products.map((product) => (

            <Card
              key={product.name}
              sx={{
                minWidth: 280,
                flexShrink: 0,
                borderRadius: 3,
                scrollSnapAlign: "start",
                transition: "0.25s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: 6
                }
              }}
            >

              <CardMedia
                component="img"
                image={product.img}
                alt={`Auto deportivo ${product.name}`}
                loading="lazy"
                sx={{
                  height: 220,
                  objectFit: "cover"
                }}
              />

              <CardContent>

                <Typography component="h3" variant="h6">
                  {product.name}
                </Typography>

                <Typography color="text.secondary">
                  Precio: {product.price}
                </Typography>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2 }}
                  component={RouterLink}
                  to="/shopping"
                >
                  Ver producto
                </Button>

              </CardContent>

            </Card>

          ))}

        </Box>

      </Container>

      {/* REPOSITORIO */}

      <Box
        component="section"
        aria-labelledby="repo-title"
        sx={{
          py: 10,
          px: 2,
          textAlign: "center",
          background: "linear-gradient(135deg,#0f172a,#1e293b)",
          color: "white"
        }}
      >

        <Container maxWidth="md">

          <Stack spacing={3} alignItems="center">

            <GitHubIcon sx={{ fontSize: 50 }} aria-hidden />

            <Typography
              id="repo-title"
              variant="h4"
              component="h2"
              fontWeight="bold"
            >
              Repositorio de la Web
            </Typography>

            <Typography sx={{ maxWidth: 600 }}>
              Este proyecto es una tienda de autos desarrollada con React,
              Vite y Material UI.
            </Typography>

            <Button
              component="a"
              variant="contained"
              size="large"
              startIcon={<GitHubIcon />}
              href="https://github.com/fauriorrego-create/Taller-3-Tienda-De-Autos"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                mt: 2,
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                borderRadius: 3,
                background: "#24292e",
                "&:hover": { background: "#000" }
              }}
            >
              Ver repositorio en GitHub
            </Button>

          </Stack>

        </Container>

      </Box>

    </main>
  );
};
