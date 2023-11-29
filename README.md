# Ejecución del Proyecto

Proyecto de inventario de quipo de medicion.

## Descripcion de proyecto
El proyecto utiliza [Django](https://www.djangoproject.com/) del lado del servidor y [react]([https://vitejs.dev/guide/](https://vitejs.dev/)) del lado del cliente

- Tiene la capacidad de agregar inventario individualmente o en masa con un archivo CSV (Separado por coma) 
- Tiene la capacidad de modificar los datos del inventario
- Tiene la capacidad de eliminar el inventario

## Limitaciones

- Solo se puede subir un maximo de 1000 registros por lote.

## Clonar repositorio

Para clonar el repositorio puedes ejecutar en powershell o terminal lo siguiente:

```bash
git clone https://github.com/Diego-GV191/inventario.git
```

## Configurar el servidor de lado de cliente
1. Accede a el archivo que se encuentra en
   client -> src -> api -> Inventory.API.js
   y modifica la dirección de la API

## Configuración del entorno virtual

Asegúrate de tener [Python](https://www.python.org/) instalado. (Proyecto probado en Python 3.11.0) Desde la raíz del proyecto:

1. Crea y activa un entorno virtual usando `virtualenv` o `venv`:
    ```bash
    # Crear un entorno virtual
    python -m venv inv-venv
    
    # Activar el entorno virtual (Windows)
    .\inv-venv\Scripts\activate
    
    # Activar el entorno virtual (Linux/Mac)
    source inv-venv/bin/activate
    ```

## Ejecutar el servidor Django

1. Instala las dependencias de Django (asegúrate de estar en el entorno virtual):
    ```bash
    pip install -r requirements.txt
    ```
2. Realiza las migraciones de Django
   ```bash
   # Realiza las migraciones
   python manage.py makemigrations
   
   # aplica las migraciones
   python manage.py migrate
   ```
3. Ejecuta el servidor Django:
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
