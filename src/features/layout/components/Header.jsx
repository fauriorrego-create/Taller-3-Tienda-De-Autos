import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  InputBase
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";

import { useFavorites } from "../../view/hooks/useFavorites";
import { useShopping } from "../../auth/hooks/useShopping";

export const Header = () => {

  const { count } = useFavorites();
  const { totalItems } = useShopping();

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const linkStyle = {
    textDecoration: "none",
    color: "inherit"
  };

  const menuItems = [
    { text: "Inicio", icon: <HomeIcon />, link: "/" },
    { text: "Ofertas", icon: <LocalOfferIcon />, link: "/Offer" },
    { text: "Artículos", icon: <ArticleIcon />, link: "/Article" },
    { text: "Favoritos", icon: <FavoriteIcon />, link: "/Favorite" },
    { text: "Carrito", icon: <ShoppingCartIcon />, link: "/Shopping" },
    { text: "Cuenta", icon: <PersonIcon />, link: "/Account" }
  ];

  return (
    <Box component="header">

      {/* BARRA SUPERIOR */}

      <Box
        sx={{
          background: "black",
          color: "white",
          textAlign: "center",
          py: 0.7,
          fontSize: 13,
          position: "fixed",
          width: "100%",
          zIndex: 1300
        }}
      >
        Envíos a todo Colombia 🚚
      </Box>


      {/* HEADER PRINCIPAL */}

      <AppBar
        position="fixed"
        color="inherit"
        elevation={1}
        sx={{ top: "28px" }}
      >

        <Toolbar
          sx={{
            justifyContent: "space-between",
            gap: 2
          }}
        >

          {/* BOTÓN MENÚ */}

          <IconButton
            onClick={toggleMenu}
            aria-label="Abrir menú de navegación"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>


          {/* LOGO */}

          <Typography
            variant="h5"
            component={NavLink}
            to="/"
            fontWeight="bold"
            sx={linkStyle}
          >
            Grand Torque
          </Typography>


          {/* BUSCADOR */}

          <Box
            role="search"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              background: "#f5f5f5",
              borderRadius: 2,
              px: 2,
              py: 0.5,
              width: "40%"
            }}
          >

            <SearchIcon
              sx={{ mr: 1, color: "gray" }}
              aria-hidden="true"
            />

            <InputBase
              placeholder="Buscar autos..."
              inputProps={{
                "aria-label": "Buscar autos"
              }}
              sx={{ width: "100%" }}
            />

          </Box>


          {/* ICONOS */}

          <Box
            sx={{ display: "flex", gap: 1 }}
            component="nav"
            aria-label="Acciones de usuario"
          >

            <IconButton
              component={NavLink}
              to="/Favorite"
              color="inherit"
              aria-label="Ir a favoritos"
            >

              <Badge badgeContent={count} color="error">

                <FavoriteIcon />

              </Badge>

            </IconButton>

            <IconButton
              component={NavLink}
              to="/Shopping"
              color="inherit"
              aria-label="Ir al carrito de compras"
            >

              <Badge badgeContent={totalItems} color="error">

                <ShoppingCartIcon />

              </Badge>

            </IconButton>

          </Box>

        </Toolbar>

      </AppBar>


      {/* MENÚ DESKTOP */}

      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          top: "92px",
          borderTop: "1px solid #eee",
          borderBottom: "1px solid #eee",
          display: { xs: "none", md: "block" }
        }}
      >

        <Toolbar
          component="nav"
          aria-label="Navegación principal"
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4
          }}
        >

          <Button component={NavLink} to="/" startIcon={<HomeIcon />} color="inherit">
            Inicio
          </Button>

          <Button component={NavLink} to="/Offer" startIcon={<LocalOfferIcon />} color="inherit">
            Ofertas
          </Button>

          <Button component={NavLink} to="/Article" startIcon={<ArticleIcon />} color="inherit">
            Artículos
          </Button>

          <Button component={NavLink} to="/Favorite" startIcon={<FavoriteIcon />} color="inherit">
            <Badge badgeContent={count} color="error">
              Favoritos
            </Badge>
          </Button>

          <Button component={NavLink} to="/Shopping" startIcon={<ShoppingCartIcon />} color="inherit">
            <Badge badgeContent={totalItems} color="error">
              Carrito
            </Badge>
          </Button>

          <Button component={NavLink} to="/Account" startIcon={<PersonIcon />} color="inherit">
            Cuenta
          </Button>

        </Toolbar>

      </AppBar>


      {/* DRAWER MOBILE */}

      <Drawer
        anchor="left"
        open={openMenu}
        onClose={toggleMenu}
        aria-label="Menú de navegación"
      >

        <Box sx={{ width: 250 }}>

          <Typography
            variant="h6"
            sx={{ p: 2 }}
          >
            Menú
          </Typography>

          <List>

            {menuItems.map((item) => (

              <ListItem key={item.text} disablePadding>

                <ListItemButton
                  component={NavLink}
                  to={item.link}
                  onClick={toggleMenu}
                >

                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>

                  <ListItemText primary={item.text} />

                </ListItemButton>

              </ListItem>

            ))}

          </List>

        </Box>

      </Drawer>


      {/* ESPACIADORES */}

      <Toolbar />
      <Toolbar />
      <Toolbar />

    </Box>
  );
};
