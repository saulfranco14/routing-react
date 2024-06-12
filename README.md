# Routing en React

Este proyecto está diseñado para demostrar la funcionalidad de protección de rutas utilizando React, TypeScript y Vite. Implementa una arquitectura limpia para mejorar la visibilidad y escalabilidad.

## Funcionalidades Principales

### Protección de Rutas

- **AuthGuard**: Verifica si el usuario está autenticado antes de permitir el acceso a rutas protegidas.
- **RoleGuard**: Controla el acceso a rutas basadas en los roles de los usuarios.

### Componentes y Páginas

- **Logout**: Componente para manejar el cierre de sesión de los usuarios.
- **Home**: Página principal accesible después de la autenticación.
- **Login**: Página de inicio de sesión para usuarios no autenticados.
- **Dashboard**: Página accesible solo por usuarios con roles específicos (e.g., ADMIN).

### Estado Global

El manejo del estado global se realiza con Redux, asegurando que los diferentes componentes de la aplicación puedan acceder y modificar el estado de manera centralizada y eficiente.

## Instalación y Configuración

Para instalar y configurar el proyecto, sigue estos pasos:

1. Clona el repositorio.
2. Ejecuta `pnpm install` para instalar las dependencias.
3. Configura las variables de entorno si es necesario.
4. Ejecuta `pnpm dev` para iniciar el servidor de desarrollo.

## Descripción de Carpetas y Archivos

- **assets**: Contiene archivos estáticos como imágenes, fuentes, etc.
- **components**: Contiene componentes reutilizables de la aplicación. Ejemplo: `Logout`.
- **guards**: Contiene los guardias de rutas que protegen el acceso a ciertas rutas basadas en autenticación y roles de usuario.
- **helpers**: Contiene funciones auxiliares y utilidades.
- **interfaces**: Define las interfaces TypeScript usadas en la aplicación.
- **models**: Contiene los modelos de datos usados en la aplicación.
- **pages**: Contiene los componentes de las páginas principales de la aplicación.
- **redux**: Configuración y módulos de Redux para el manejo del estado global.
- **services**: Contiene servicios que manejan la lógica de negocio y la comunicación con APIs.
- **types**: Define los tipos TypeScript globales usados en la aplicación.
- **App.css**: Estilos globales para el componente App.
- **index.css**: Estilos globales para la aplicación.
- **main.tsx**: Punto de entrada principal de la aplicación.
- **vite-env.d.ts**: Tipos específicos para Vite.

## Estructura del Proyecto

```
├── node_modules
├── public
├── src
│   ├── assets
│   ├── components
│   │   └── Logout
│   ├── guards
│   ├── helpers
│   ├── interfaces
│   ├── models
│   ├── pages
│   ├── redux
│   ├── services
│   ├── types
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── pnpm-lock.yaml
```