# Proyecto integrador Mercado Liebre 📦

Mercado Liebre es una aplicación web de comercio electrónico donde los usuarios pueden buscar productos, registrarse, iniciar sesión y ver ofertas basadas en sus visitas anteriores.

## 📑 Características

- *Página principal*: Muestra un banner y secciones de productos basados en visitas anteriores y ofertas.
- *Formulario de Registro*: Permite a los usuarios crear una cuenta proporcionando su información personal.
- *Formulario de Inicio de Sesión*: Permite a los usuarios iniciar sesión en su cuenta.
- *Barra de Búsqueda*: Permite a los usuarios buscar productos en el sitio.

## 📂 Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

bash
.
├── public/
│   ├── css/
│   │   └── styles.css            # Estilos CSS de la aplicación
│   └── images/
│        ├── img-cafetera-moulinex.jpg
│        ├── img-home-banner.jpg
│        ├── img-macbook-pro-2019.jpg
│        ├── img-samsung-galaxy-s10.jpg
│        ├── img-tv-samsung-smart.jpg
│        ├── logo-mercado-liebre.svg
│        └── logo.png              # Logo de la aplicación                 
├── views/
│   ├── index.html                # Página principal de la aplicación
│   ├── login.html                # Formulario de inicio de sesión
│   └── register.html             # Formulario de registro de usuario
├── app.js                        # Archivo principal del servidor Node.js
├── package.json                  # Archivo de configuración del proyecto y dependencias
├── README.md                     # Documentación del proyecto
└── .gitignore                    # Archivos y directorios a ignorar por Git


## 🚀 Instalación

1. Clona el repositorio en tu máquina local:

   bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git

2. Navega al directorio del proyecto:

   bash
   cd nombre-del-repositorio

3. Instala las dependencias necesarias:

   bash
   npm install

4. Inicia el servidor:
 
   bash
   node app.js
