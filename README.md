# Ejecución del Proyecto

## Clonar repositorio

Para clonar el repositorio puedes ejecutar en powershell lo siguiente:

```bash
git clone https://github.com/Diego-GV191/inventario.git
```

## Configuración del entorno virtual

Asegúrate de tener [Python](https://www.python.org/) instalado. (Proyecto probado en Python 3.11.0) Desde la raíz del proyecto:

1. Activa un entorno virtual usando `virtualenv` o `venv`:
    ```bash
    # Activar el entorno virtual (Windows)
    .\inv-venv\Scripts\activate
    ```

## Ejecutar el servidor Django

1. Instala las dependencias de Django (asegúrate de estar en el entorno virtual):
    ```bash
    pip install -r requirements.txt
    ```

2. Ejecuta el servidor Django:
    ```bash
    python manage.py runserver 0.0.0.0:8000
    ```

## Instalar Node.js y configurar el proyecto cliente

Desde la carpeta "client":

1. Asegúrate de tener [Node.js](https://nodejs.org/en) instalado. (Proyecto probado en Node.js v18.12.1)

2. Instala las dependencias del proyecto cliente:
    ```bash
    npm install
    ```

3. Ejecuta el proyecto cliente en modo de desarrollo:
    ```bash
    npm run dev
    ```

¡Listo! Ahora deberías tener el servidor Django ejecutándose y el proyecto cliente de Node.js en desarrollo.
````
