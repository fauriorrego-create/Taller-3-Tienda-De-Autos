import { Box, Container, Typography, Link } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#111",
        color: "#fff",
        mt: 8,
        pt: 6,
        pb: 4
      }}
    >
      <Container maxWidth="lg">

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 4
          }}
        >

          {/* Marca */}
          <Box sx={{ flex: "1 1 250px" }}>
            <Typography
              variant="h5"
              component="h2"
              fontWeight="bold"
              gutterBottom
            >
              Grand Torque
            </Typography>

            <Typography variant="body2" color="gray">
              Tecnología premium al mejor precio. Innovación,
              potencia y diseño en un solo lugar.
            </Typography>
          </Box>

          {/* Enlaces */}
          <Box
            component="nav"
            aria-label="Enlaces del sitio"
            sx={{ flex: "1 1 200px" }}
          >

            <Typography
              variant="h6"
              component="h3"
              fontWeight="bold"
              gutterBottom
            >
              Enlaces
            </Typography>

            <Link href="#" underline="hover" color="gray" display="block" sx={{ mb: 1 }}>
              Inicio
            </Link>

            <Link href="#" underline="hover" color="gray" display="block" sx={{ mb: 1 }}>
              Productos
            </Link>

            <Link href="#" underline="hover" color="gray" display="block" sx={{ mb: 1 }}>
              Contacto
            </Link>

          </Box>

          {/* Contacto */}
          <Box sx={{ flex: "1 1 200px" }}>
            <Typography
              variant="h6"
              component="h3"
              fontWeight="bold"
              gutterBottom
            >
              Contacto
            </Typography>

            <Typography variant="body2" color="gray">
              Email: soporte@webshop.com
            </Typography>

            <Typography variant="body2" color="gray">
              Tel: +57 300 000 0000
            </Typography>
          </Box>

        </Box>

        {/* Línea inferior */}

        <Box
          sx={{
            borderTop: "1px solid #333",
            mt: 4,
            pt: 2,
            textAlign: "center"
          }}
        >
          <Typography variant="body2" color="gray">
            © 2026 Grand Torque. Todos los derechos reservados.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};
