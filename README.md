# 🚗 WEB SHOP - Tienda de Autos

Aplicación web desarrollada con **React + Vite + Material UI** que simula una **tienda online de automóviles**, donde los usuarios pueden explorar vehículos, ver ofertas, agregar autos a favoritos y gestionar su cuenta.

El proyecto utiliza una **arquitectura modular basada en features**, lo que permite una organización clara, escalable y mantenible del código.

---

# 🛠 Tecnologías utilizadas

* React
* Vite
* Material UI
* JavaScript (ES6+)
* React Hooks
* Arquitectura Feature-Based
* ESLint

---

# 📁 Estructura del proyecto

```
WEB_SHOP
│
├── .vscode
├── node_modules
│
├── public
│   ├── img
│   ├── videos
│   └── robots.txt
│
├── src
│
│   ├── features
│   │   └── auth
│   │       │
│   │       ├── Components
│   │       │   ├── Account.jsx
│   │       │   ├── Favorite.jsx
│   │       │   └── Shopping.jsx
│   │       │
│   │       ├── hooks
│   │       │   ├── useAccount.jsx
│   │       │   └── useShopping.jsx
│   │       │
│   │       └── pages
│   │
│   ├── layout
│   │   ├── components
│   │   │   ├── Content.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Header.jsx
│   │   │
│   │   ├── hooks
│   │   └── pages
│   │
│   ├── view
│   │   ├── components
│   │   │   ├── Article.jsx
│   │   │   └── Offer.jsx
│   │   │
│   │   ├── hooks
│   │   │   ├── customHooks.jsx
│   │   │   ├── useCallback.jsx
│   │   │   ├── useContext.jsx
│   │   │   ├── useEffect.jsx
│   │   │   ├── useFavorites.jsx
│   │   │   ├── useMemo.jsx
│   │   │   ├── useOnlineStatus.jsx
│   │   │   ├── useReducer.jsx
│   │   │   ├── useRef.jsx
│   │   │   └── useState.jsx
│   │   │
│   │   └── pages
│   │
│   ├── shared
│   │   └── styles
│   │       └── Index.css
│
│   ├── App.jsx
│   ├── main.jsx
│   └── routes.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── Realme.md
└── vite.config.js
```

---

# 🧩 Arquitectura del proyecto

El proyecto utiliza una **arquitectura modular basada en features**, donde cada módulo agrupa:

* **components → interfaz de usuario**
* **hooks → lógica reutilizable**
* **pages → páginas principales**

Esto permite:

✔ Código más organizado
✔ Mejor mantenimiento
✔ Escalabilidad del proyecto
✔ Separación clara de responsabilidades

---

# 🔐 Módulo Auth

Este módulo gestiona las funcionalidades relacionadas con el usuario.

### Account.jsx

Permite:

* Registrar usuarios
* Editar información del perfil
* Subir imagen de perfil
* Eliminar cuenta

### Favorite.jsx

Permite gestionar los **autos favoritos del usuario**.

### Shopping.jsx

Simula el **proceso de compra o selección de vehículos**.

---

# 🧱 Layout

Define la estructura visual principal de la aplicación.

### Header.jsx

Barra de navegación principal.

### Content.jsx

Contenedor donde se renderizan las diferentes vistas.

### Footer.jsx

Pie de página con información adicional de la tienda.

---

# 🚘 Módulo View

Contiene los componentes que muestran los vehículos disponibles.

### Article.jsx

Componente que representa un **auto dentro de la tienda** mostrando:

* Imagen
* Marca
* Modelo
* Precio
* Características principales

### Offer.jsx

Sección de **autos en promoción o descuento**.

---

# 🧠 Hooks personalizados

Dentro de `view/hooks` se incluyen implementaciones personalizadas de hooks de React para entender su funcionamiento:

* useState
* useEffect
* useContext
* useReducer
* useMemo
* useRef
* useCallback

También incluye:

### useFavorites

Gestión de autos favoritos.

### useOnlineStatus

Detecta si el usuario está **online o offline**.

---

# 🎨 Shared

Contiene recursos compartidos del proyecto.

### styles

Archivos de estilos globales de la aplicación.

---

# 🚀 Instalación

Clonar el repositorio:

```
git clone https://github.com/tu-usuario/web-shop.git
```

Entrar a la carpeta:

```
cd web-shop
```

Instalar dependencias:

```
npm install
```

Ejecutar el proyecto:

```
npm run dev
```

---

# 🌐 Acceso a la aplicación

```
http://localhost:5173
```

---

# ♿ Accesibilidad

La aplicación incluye mejoras de accesibilidad como:

* atributos `aria-label`
* textos alternativos `alt`
* landmarks semánticos
* componentes accesibles de Material UI

Esto mejora la compatibilidad con **lectores de pantalla y herramientas de accesibilidad**.

---

# 📈 Mejoras futuras

* Integración con API real de autos
* Sistema de autenticación completo
* Carrito de compras real
* Filtros por marca, precio y año
* Sistema de pago
* Panel de administración
* Base de datos de vehículos

---

# 👨‍💻 Autor

Proyecto desarrollado como práctica de:

* React
* Arquitectura modular
* Hooks personalizados
* Accesibilidad web
* Interfaces modernas con Material UI

---
