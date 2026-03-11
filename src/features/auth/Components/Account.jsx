import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  TextField,
  Button,
  Box,
  Stack,
  InputAdornment,
  Snackbar,
  Alert
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import UploadIcon from "@mui/icons-material/Upload";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

import { useAccount } from "../hooks/useAccount";

export const Account = () => {
  const {
    user,
    form,
    errors,
    isValid,
    snackbar,
    isOnline,
    handleChange,
    handleImage,
    saveUser,
    deleteUser,
    closeSnackbar
  } = useAccount();

  const getColor = (field) => {
    if (!form[field]) return "inherit";
    return errors[field] ? "error.main" : "success.main";
  };

  // Manejar submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recarga de página
    saveUser();
  };

  return (
    <Container component="main" role="main" maxWidth="lg" sx={{ py: 6 }}>
      <Grid container spacing={4} justifyContent="center">

        {/* PERFIL */}
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 4, overflow: "hidden" }}>
            <Box
              role="img"
              aria-label="Imagen de fondo del perfil"
              sx={{
                height: 200,
                backgroundImage: user?.background
                  ? `url(${user.background})`
                  : "linear-gradient(135deg,#1976d2,#42a5f5)",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Avatar
                src={user?.image || ""}
                alt={user?.name ? `Foto de perfil de ${user.name}` : "Foto de perfil del usuario"}
                sx={{
                  width: 120,
                  height: 120,
                  mx: "auto",
                  mt: -8,
                  mb: 2,
                  border: "4px solid white"
                }}
              >
                {!user?.image && <PersonIcon aria-hidden="true" />}
              </Avatar>

              <Typography component="h1" variant="h6">
                {user?.name || "Invitado"}
              </Typography>

              <Typography color="text.secondary">
                {user?.email || "Sin correo"}
              </Typography>

              <Typography
                aria-live="polite"
                sx={{
                  mt: 1,
                  fontWeight: "bold",
                  color: isOnline ? "success.main" : "error.main"
                }}
              >
                {isOnline ? "● En línea" : "● Sin conexión"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* FORMULARIO */}
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Stack
                spacing={3}
                component="form"
                onSubmit={handleSubmit} // <- importante para submit
                noValidate
              >
                <TextField
                  label="Nombre"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name}
                  aria-label="Nombre del usuario"
                  aria-invalid={!!errors.name}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon aria-hidden="true" sx={{ color: getColor("name") }} />
                      </InputAdornment>
                    )
                  }}
                />

                <TextField
                  label="Correo"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email}
                  aria-label="Correo electrónico"
                  aria-invalid={!!errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon aria-hidden="true" sx={{ color: getColor("email") }} />
                      </InputAdornment>
                    )
                  }}
                />

                <TextField
                  label="Contraseña"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  fullWidth
                  error={!!errors.password}
                  helperText={errors.password}
                  aria-label="Contraseña"
                  aria-invalid={!!errors.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon aria-hidden="true" sx={{ color: getColor("password") }} />
                      </InputAdornment>
                    )
                  }}
                />

                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<UploadIcon />}
                  fullWidth
                  aria-label="Subir imagen de perfil"
                >
                  Imagen de perfil
                  <input hidden type="file" accept="image/*" onChange={(e) => handleImage(e, "image")} />
                </Button>

                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<UploadIcon />}
                  fullWidth
                  aria-label="Subir fondo de perfil"
                >
                  Fondo de perfil
                  <input hidden type="file" accept="image/*" onChange={(e) => handleImage(e, "background")} />
                </Button>

                <Button
                  type="submit" // <- ahora funciona correctamente
                  variant="contained"
                  startIcon={<SaveIcon />}
                  disabled={!isValid}
                  fullWidth
                  size="large"
                  aria-label="Guardar o registrar usuario"
                >
                  {user ? "Actualizar perfil" : "Registrarse"}
                </Button>

                {user && (
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={deleteUser}
                    fullWidth
                    aria-label="Eliminar cuenta del usuario"
                  >
                    Eliminar cuenta
                  </Button>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={closeSnackbar}>
        <Alert severity="success" variant="filled" role="alert">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};
