# Proyecto Municipalidad

Este es el proyecto backend para la Municipalidad.

## Variables de Entorno

Asegúrate de configurar las siguientes variables de entorno antes de ejecutar el proyecto:

- `BASE_PORT`: Dirección local.
- `SUPABASE_URL`: Url de la base de datos.
- `SUPABASE_KEY`: Key de la base de datos.

## Pasos para Ejecutar el Proyecto

Sigue estos pasos para configurar y ejecutar el proyecto:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu_usuario/municipalidad.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd municipalidad/muni_back
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Configura las variables de entorno en un archivo `.env` en la raíz del proyecto:
    ```env
    DB_HOST=tu_db_host
    DB_PORT=tu_db_port
    DB_USER=tu_db_user
    DB_PASSWORD=tu_db_password
    API_KEY=tu_api_key
    ```

5. Inicia el servidor:
    ```bash
    npm start
    ```

6. Accede a la aplicación en tu navegador:
    ```
    http://localhost:5000
    ```

¡Listo! Ahora deberías tener el proyecto en funcionamiento.
