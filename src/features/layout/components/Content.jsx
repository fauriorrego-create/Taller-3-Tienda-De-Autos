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
          src="/img/auto14.jpg"
          alt="img promocional de autos deportivos"
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
            variant="h3"
            component="h1"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" }
            }}
          >
            Tecnología que transforma tu mundo
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mt: 2,
              maxWidth: 600
            }}
          >
            Descubre autos de alto rendimiento con el mejor diseño
            y la tecnología más avanzada.
          </Typography>

          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/shopping"
            aria-label="Ir a la tienda de autos"
            sx={{ mt: 4 }}
          >
            Comprar ahora
          </Button>

        </Box>

      </Box>

      {/* CARACTERISTICAS */}

      <Container sx={{ py: 8 }}>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          justifyContent="center"
          textAlign="center"
        >

          <Box>

            <SpeedIcon sx={{ fontSize: 40, mb: 1 }} aria-hidden="true" />

            <Typography fontWeight="bold">
              Máximo rendimiento
            </Typography>

            <Typography color="text.secondary">
              Autos diseñados para velocidad y potencia.
            </Typography>

          </Box>

          <Box>

            <SecurityIcon sx={{ fontSize: 40, mb: 1 }} aria-hidden="true" />

            <Typography fontWeight="bold">
              Seguridad avanzada
            </Typography>

            <Typography color="text.secondary">
              Tecnología de seguridad de última generación.
            </Typography>

          </Box>

          <Box>

            <LocalShippingIcon sx={{ fontSize: 40, mb: 1 }} aria-hidden="true" />

            <Typography fontWeight="bold">
              Envío internacional
            </Typography>

            <Typography color="text.secondary">
              Compra desde cualquier lugar del mundo.
            </Typography>

          </Box>

        </Stack>

      </Container>

      {/* PRODUCTOS DESTACADOS */}

      <Container sx={{ pb: 8 }}>

        <Typography
          variant="h4"
          component="h2"
          fontWeight="bold"
          textAlign="center"
          mb={4}
        >
          Autos destacados
        </Typography>

        <Box
          role="list"
          aria-label="Lista de autos destacados"
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            pb: 2,
            scrollSnapType: "x mandatory",
            "&::-webkit-scrollbar": { display: "none" }
          }}
        >

          {products.map((product, index) => (

            <Card
              key={index}
              role="listitem"
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
                alt={`Imagen del auto ${product.name}`}
                loading="lazy"
                sx={{
                  height: 220,
                  objectFit: "cover"
                }}
              />

              <CardContent>

                <Typography variant="h6" component="h3">
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
                  aria-label={`Ver producto ${product.name}`}
                >
                  Ver producto
                </Button>

              </CardContent>

            </Card>

          ))}

        </Box>

      </Container>

      {/* BANNER PROMOCIONAL */}

      <Box
        sx={{
          background: "linear-gradient(135deg,#111,#333)",
          color: "white",
          textAlign: "center",
          py: 8,
          px: 2
        }}
      >

        <Typography variant="h4" component="h2" fontWeight="bold">
          Encuentra el auto de tus sueños
        </Typography>

        <Typography sx={{ mt: 2, mb: 3 }}>
          Explora nuestra colección exclusiva de autos deportivos
        </Typography>

        <Button
          variant="contained"
          size="large"
          component={RouterLink}
          to="/shopping"
          aria-label="Explorar catálogo de autos"
        >
          Explorar catálogo
        </Button>

      </Box>

      {/* REPOSITORIO DEL PROYECTO */}

      <Box
        component="section"
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

            <GitHubIcon sx={{ fontSize: 50 }} aria-hidden="true" />

            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
            >
              Repositorio de la Web
            </Typography>

            <Typography
              sx={{
                maxWidth: 600,
                color: "rgba(255,255,255,0.8)"
              }}
            >
              Este proyecto es una tienda de autos desarrollada con
              React, Vite y Material UI. Puedes explorar el código
              completo, su arquitectura y las funcionalidades en
              nuestro repositorio oficial de GitHub.
            </Typography>

            <Button
              variant="contained"
              size="large"
              startIcon={<GitHubIcon />}
              href="https://github.com/fauriorrego-create/Taller-3-Tienda-De-Autos.git"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir al repositorio de GitHub del proyecto"
              sx={{
                mt: 2,
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                borderRadius: 3,
                background: "#24292e",
                "&:hover": {
                  background: "#000"
                }
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
