# Proyecto Django - Sitio Web

Este es un proyecto Django que incluye múltiples aplicaciones para crear un sitio web completo.

## 📋 Requisitos Previos

- Python 3.8 o superior
- pip (gestor de paquetes de Python)
- Git (para clonar el repositorio)

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone <URL-del-repositorio>
cd diango-practica-main
```

### 2. Crear entorno virtual (recomendado)
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

### 3. Instalar dependencias
```bash
pip install django
```

### 4. Configurar la base de datos
```bash
python manage.py migrate
```

### 5. Crear superusuario (opcional)
```bash
python manage.py createsuperuser
```

## 🏃‍♂️ Ejecutar el Proyecto

### 1. Iniciar el servidor de desarrollo
```bash
python manage.py runserver
```

### 2. Abrir en el navegador
- **Página principal**: http://127.0.0.1:8000/
- **Admin Django**: http://127.0.0.1:8000/admin/
- **Página home**: http://127.0.0.1:8000/home/

## 📁 Estructura del Proyecto

```
diango-practica-main/
├── misitio/                 # Configuración principal del proyecto
│   ├── settings.py         # Configuraciones del proyecto
│   ├── urls.py            # URLs principales
│   └── wsgi.py            # Configuración WSGI
├── Sitio/                  # Aplicación principal del sitio
│   ├── views.py           # Vistas de la aplicación
│   ├── urls.py            # URLs de la aplicación
│   └── models.py          # Modelos de datos
├── carrito/                # Aplicación del carrito de compras
├── servicios/              # Aplicación de servicios
├── templates/              # Templates generales del proyecto
│   └── index.html         # Página principal
└── manage.py               # Script de administración de Django
```

## 🌐 Aplicaciones Incluidas

### Sitio (Aplicación Principal)
- **Ruta principal** (`/`): Muestra `index.html`
- **Ruta home** (`/home/`): Muestra mensaje de texto

### Carrito
- Aplicación para gestión de carrito de compras
- Template: `carritodecompra.html`

### Servicios
- Aplicación para gestión de servicios
- Template: `servicios.html`

## 🛠️ Comandos Útiles

### Desarrollo
```bash
# Ejecutar servidor
python manage.py runserver

# Ejecutar servidor en puerto específico
python manage.py runserver 8080

# Ejecutar servidor accesible desde otros dispositivos
python manage.py runserver 0.0.0.0:8000
```

### Base de Datos
```bash
# Crear migraciones
python manage.py makemigrations

# Aplicar migraciones
python manage.py migrate

# Ver estado de migraciones
python manage.py showmigrations
```

### Shell de Django
```bash
# Abrir shell interactivo
python manage.py shell
```

## 📝 Notas Importantes

- El proyecto está configurado para desarrollo (`DEBUG = True`)
- La base de datos por defecto es SQLite
- Los templates se buscan primero en la carpeta `templates/` del proyecto
- Cada aplicación tiene su propia carpeta de templates

## 🔧 Solución de Problemas

### Error de puerto ocupado
```bash
# Cambiar puerto
python manage.py runserver 8080
```

### Error de migraciones
```bash
# Resetear base de datos (¡CUIDADO! Borra todos los datos)
python manage.py flush
```

### Error de dependencias
```bash
# Reinstalar dependencias
pip install -r requirements.txt
```

## 📞 Soporte

Si tienes problemas o preguntas:
1. Revisa la documentación oficial de Django
2. Verifica que todas las dependencias estén instaladas
3. Asegúrate de estar en el directorio correcto del proyecto

## 🚀 Próximos Pasos

- [ ] Crear archivo `requirements.txt`
- [ ] Agregar más funcionalidades al carrito
- [ ] Implementar sistema de usuarios
- [ ] Agregar estilos CSS
- [ ] Configurar base de datos PostgreSQL para producción
