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
  Alert,
  LinearProgress
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

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUser(); // Llama a saveUser directamente
  };

  return (
    <Container component="main" maxWidth="md" sx={{ py: 6 }}>
      <Grid container spacing={4} justifyContent="center">

        {/* PERFIL */}
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 4, overflow: "hidden", boxShadow: 6 }}>
            <Box
              role="img"
              aria-label="Imagen de fondo del perfil"
              sx={{
                height: 180,
                backgroundImage: form.background || user?.background
                  ? `url(${form.background || user.background})`
                  : "linear-gradient(120deg,#6a11cb,#2575fc)",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Avatar
                src={form.image || user?.image || ""}
                alt={user?.name || "Invitado"}
                sx={{
                  width: 120,
                  height: 120,
                  mx: "auto",
                  mt: -8,
                  mb: 2,
                  border: "4px solid white"
                }}
              >
                {!form.image && !user?.image && <PersonIcon />}
              </Avatar>
              <Typography variant="h6">{form.name || user?.name || "Invitado"}</Typography>
              <Typography color="text.secondary">{form.email || user?.email || "Sin correo"}</Typography>
              <Typography
                aria-live="polite"
                sx={{ mt: 1, fontWeight: "bold", color: isOnline ? "success.main" : "error.main" }}
              >
                {isOnline ? "● En línea" : "● Sin conexión"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* FORMULARIO */}
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: 4, boxShadow: 6 }}>
            <CardContent>
              <Stack
                spacing={3}
                component="form"
                onSubmit={handleSubmit}
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
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><PersonIcon sx={{ color: getColor("name") }} /></InputAdornment>
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
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><EmailIcon sx={{ color: getColor("email") }} /></InputAdornment>
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
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><LockIcon sx={{ color: getColor("password") }} /></InputAdornment>
                  }}
                />

                <Button variant="outlined" component="label" startIcon={<UploadIcon />} fullWidth>
                  {form.image ? "Imagen de perfil seleccionada ✅" : "Subir imagen de perfil"}
                  <input hidden type="file" accept="image/*" onChange={(e) => handleImage(e, "image")} />
                </Button>
                {form.image && <LinearProgress variant="determinate" value={100} sx={{ mb: 1 }} />}

                <Button variant="outlined" component="label" startIcon={<UploadIcon />} fullWidth>
                  {form.background ? "Fondo seleccionado ✅" : "Subir fondo de perfil"}
                  <input hidden type="file" accept="image/*" onChange={(e) => handleImage(e, "background")} />
                </Button>
                {form.background && <LinearProgress variant="determinate" value={100} sx={{ mb: 1 }} />}

                <Button type="submit" variant="contained" startIcon={<SaveIcon />} fullWidth size="large">
                  {user ? "Actualizar perfil" : "Registrarse"}
                </Button>

                {user && (
                  <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={deleteUser} fullWidth>
                    Eliminar cuenta
                  </Button>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={closeSnackbar}>
        <Alert severity="success" variant="filled">{snackbar.message}</Alert>
      </Snackbar>
    </Container>
  );
};
