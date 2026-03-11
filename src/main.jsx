
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./shared/styles/Index.css";
import App from './App.jsx'
import { FavoritesProvider } from "./features/view/hooks/useFavorites.jsx";
import { ShoppingProvider } from "./features/auth/hooks/useShopping.jsx";
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"


createRoot(document.getElementById('root')).render(
  <FavoritesProvider>
  <ShoppingProvider>
    <App />
  </ShoppingProvider>
  </FavoritesProvider>,
)
