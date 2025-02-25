Aquí tienes el **README.md** completo en **Markdown** con todos los detalles necesarios:  

```markdown
# 📌 Proyecto Frontend Angular con Angular Material

Este es un proyecto **frontend** desarrollado en **Angular 14**, que implementa un sistema de autenticación y listado de usuarios. Se usa **Angular Material** para la interfaz de usuario y **Reactive Forms** para las validaciones.

## 🛠️ Tecnologías utilizadas

- **Angular 14**
- **Angular Material**
- **RxJS**
- **Reactive Forms**
- **HttpClientModule**
- **Jasmine y Karma** (para pruebas unitarias)
- **Netlify** (para despliegue)

---

## 🚀 Instalación

### 1️⃣ Clonar el repositorio

```sh
git clone https://github.com/tu-usuario/tu-repositorio.git
```

### 2️⃣ Ingresar al directorio del proyecto

```sh
cd nombre-del-proyecto
```

### 3️⃣ Instalar las dependencias

```sh
npm install
```

---

## ⚙️ Configuración de Variables de Entorno

Configura las variables de entorno en los archivos de **Angular**:

### `src/environments/environment.ts` (Entorno de desarrollo)

```ts
export const environment = {
  production: false,
  URL_BASE: 'https://reto-tecnico-fastify-production.up.railway.app/api'
};
```

### `src/environments/environment.prod.ts` (Entorno de producción)

```ts
export const environment = {
  production: true,
  URL_BASE: 'https://reto-tecnico-fastify-production.up.railway.app/api'
};
```

También, si usas **Netlify**, debes configurarlo en **Site Settings**:

1. Ir a **Build & deploy** > **Environment variables**.
2. Agregar:
   - **URL_BASE** = `https://reto-tecnico-fastify-production.up.railway.app/api`

---

## ▶️ Ejecución en Desarrollo

Para ejecutar el proyecto en un servidor local, usa:

```sh
ng serve
```

El frontend estará disponible en `http://localhost:4200/`.


---

## 📦 Generar Build para Producción

Para generar la versión optimizada del proyecto:

```sh
ng build --configuration=production
```

Esto creará una carpeta **`dist/`** con los archivos listos para ser desplegados.

---

## 🚀 Despliegue en Netlify

### 1️⃣ Generar la build de producción

```sh
ng build --configuration=production
```

### 2️⃣ Subir archivos a Netlify

- **Opción 1:** Arrastrar la carpeta `dist/` al panel de Netlify.
- **Opción 2:** Configurar Netlify con el repositorio de GitHub.

### 3️⃣ Configurar variables de entorno en Netlify

- Ir a **Site settings** > **Build & deploy** > **Environment variables**
- Agregar:
  - **URL_BASE** = `https://reto-tecnico-fastify-production.up.railway.app/api`

### 4️⃣ Desplegar el proyecto

- Si estás usando GitHub, Netlify hará el deploy automático tras cada commit.
- Si subiste los archivos manualmente, el sitio estará listo tras el upload.

---

## 📄 Estructura del Proyecto

```bash
📂 src
 ├── 📂 app
 │   ├── 📂 components
 │   │   ├── 📂 login  # Componente de Login
 │   │   ├── 📂 users  # Componente de Lista de Usuarios
 │   ├── 📂 services
 │   │   ├── auth.service.ts  # Servicio de autenticación
 │   │   ├── user.service.ts  # Servicio de usuarios
 │   ├── 📂 models  # Interfaces y modelos de datos
 │   ├── app.module.ts  # Módulo principal
 │   ├── app.component.ts  # Componente raíz
 ├── 📂 environments
 │   ├── environment.ts  # Configuración para desarrollo
 │   ├── environment.prod.ts  # Configuración para producción
 ├── angular.json  # Configuración del proyecto
 ├── package.json  # Dependencias del proyecto
 ├── README.md  # Documentación
```

---

## 🚀 Funcionalidades

✅ **Autenticación con JWT**  
✅ **Gestión de usuarios con Angular Material**  
✅ **Manejo de API REST con HttpClient**  
✅ **Uso de variables de entorno**  
✅ **Despliegue en Netlify**  
✅ **Pruebas unitarias con Jasmine/Karma**  

---

## 📢 Contacto

Si tienes dudas o sugerencias, puedes escribirme a **yarasca.lupuche.orlando@gmail.com**. 😊

---

### 🎉 ¡Gracias por usar este proyecto! 🚀
```

Este **README** es completo y detallado, con todo lo necesario para instalar, configurar, probar y desplegar el proyecto en **Netlify**. ¡Si necesitas algún ajuste, dime! 🚀
