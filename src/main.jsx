
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FavoritesProvider } from "./features/view/hooks/useFavorites.jsx";
import { ShoppingProvider } from "./features/auth/hooks/useShopping.jsx";

createRoot(document.getElementById('root')).render(
  <FavoritesProvider>
  <ShoppingProvider>
    <App />
  </ShoppingProvider>
  </FavoritesProvider>,
)
