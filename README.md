# Triolingo

_Triolingo es una plataforma de aprendizaje de idiomas, similar a Duolingo, desarrollada con Express, EJS y MySQL. Los usuarios pueden aprender y practicar diferentes idiomas a través de ejercicios interactivos, lecciones y seguimiento de su progreso._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer cómo desplegar el proyecto.

### Pre-requisitos 📋

Para ejecutar este proyecto en tu máquina, necesitas tener instalados los siguientes programas:

* [Node.js](https://nodejs.org/) (LTS recomendado)
* [MySQL](https://www.mysql.com/) - Base de datos utilizada para almacenar usuarios, lecciones y progreso
* [npm](https://www.npmjs.com/) para gestionar las dependencias

### Instalación 🔧

1. Clona el repositorio
    ```
    git clone https://github.com/AnderCMD/Triolingo.git
    ```

2. Navega al directorio del proyecto
    ```
    cd Triolingo
    ```

3. Instala las dependencias
    ```
    npm install
    ```

4. Crea un archivo `.env` en el directorio raíz basándote en el archivo `.env.example`:
    ```
    cp .env.example .env
    ```
    Luego edita `.env` con tus valores:
    ```
    PORT=3000
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=tu_contraseña
    DB_NAME=triolingo
    ```

5. Ejecuta el servidor de desarrollo
    ```
    npm run start
    ```

6. Abre el navegador y accede a `http://localhost:3000` para comenzar a usar Triolingo.

## Ejecutando las pruebas ⚙️

Este proyecto no incluye pruebas automatizadas actualmente, pero puedes probar las funcionalidades manualmente:

1. Asegúrate de que el servidor y la base de datos estén funcionando correctamente.
2. Inicia sesión con un usuario y verifica que puedas acceder al tablero y realizar lecciones.
3. Verifica que el progreso se registre correctamente en la base de datos.

## Despliegue 📦

Para desplegar este proyecto en un servidor de producción:

1. Sube el proyecto a tu servidor de producción.
2. Instala las dependencias en el servidor:
    ```
    npm install
    ```
3. Asegúrate de que la base de datos MySQL esté configurada correctamente en el servidor de producción.
4. Configura las variables de entorno adecuadas en el archivo `.env` del servidor:
    ```
    PORT=tu_puerto
    DB_HOST=tu_host
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_NAME=tu_base_de_datos
    ```
5. Inicia el servidor:
    ```
    npm run start
    ```

## Construido con 🛠️

* [Express](https://expressjs.com/) - Framework web para Node.js utilizado en el backend
* [EJS](https://ejs.co/) - Motor de plantillas utilizado para renderizar las vistas
* [MySQL](https://www.mysql.com/) - Base de datos relacional utilizada para almacenar información de usuarios, lecciones y progreso
* [dotenv](https://github.com/motdotla/dotenv) - Carga de variables de entorno desde el archivo `.env`

## Contribuyendo 🖇️

Este proyecto ha sido realizado por mí. Si tienes alguna sugerencia o mejora, no dudes en abrir un **pull request**.

## Autores ✒️

* **Ander González** - *Ingeniero en Software* - [AnderCMD](https://github.com/AnderCMD)
- **Emilio Arevalo Quiroz | [Ver perfil](https://github.com/Akbino)**
- **Eder Javier Sosa Rivera | [Ver perfil]()**

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para detalles.

---
⌨️ con ❤️ por [AnderCMD](https://github.com/AnderCMD) 😊
