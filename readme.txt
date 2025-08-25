# Proyecto Django - Sitio Web

Este es un proyecto Django que incluye múltiples aplicaciones para crear un sitio web completo.

## 📝 Historial de Actualizaciones

### v1.2.0 - Configuración MongoDB (24/08/2025)
- ✅ Configurado MongoDB con mongoengine
- ✅ Actualizado Django a versión 5.2.5
- ✅ Solucionado compatibilidad con Python 3.13
- ✅ Configuración híbrida: SQLite + MongoDB
- ✅ Migraciones funcionando correctamente

### v1.1.0 - Reorganización de Rutas (24/08/2025)
- ✅ Reorganizada estructura de templates
- ✅ Cambiado orden de rutas: index como principal, home como secundaria
- ✅ Templates generales en carpeta `templates/` del proyecto

### v1.0.0 - Proyecto Base (24/08/2025)
- ✅ Proyecto Django inicial creado
- ✅ Aplicaciones: Sitio, Carrito, Servicios
- ✅ Estructura básica de templates

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
pip install mongoengine pymongo
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
│   ├── wsgi.py            # Configuración WSGI
│   └── mongo_config.py    # Configuración MongoDB
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
- **Base de datos**: SQLite (para Django admin) + MongoDB (para modelos personalizados)
- **MongoDB**: Configurado con mongoengine
- **Host MongoDB**: localhost:27017
- **Base de datos**: mi_sitio_db
- Los templates se buscan primero en la carpeta `templates/` del proyecto
- Cada aplicación tiene su propia carpeta de templates

## 🔄 Nota sobre djongo vs mongoengine

**¿Por qué usamos mongoengine en lugar de djongo?**

- **djongo**: Solo compatible con Django 2.1-3.1.12 (no funciona con Python 3.13)
- **mongoengine**: Compatible con Django 5.x y Python 3.13, más moderno y estable
- **Alternativa**: Si necesitas usar djongo, deberás usar Python 3.8-3.11 y Django 3.1.12

**Para migrar a djongo (si es necesario):**
```bash
# Desinstalar mongoengine
pip uninstall mongoengine

# Instalar djongo compatible
pip install djongo==1.3.7
pip install django==3.1.12

# Modificar settings.py para usar djongo
```

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

### Error de compatibilidad Python 3.13
```bash
# Si tienes problemas con Python 3.13, usar Python 3.11
# O actualizar Django a la última versión
pip install --upgrade django
```

### Error de conexión MongoDB
```bash
# Verificar que MongoDB esté ejecutándose
# En Windows: servicios.msc -> MongoDB
# En Linux/macOS: sudo systemctl status mongod
```

## 📞 Soporte

Si tienes problemas o preguntas:
1. Revisa la documentación oficial de Django
2. Verifica que todas las dependencias estén instaladas
3. Asegúrate de estar en el directorio correcto del proyecto
4. Revisa la sección de "Solución de Problemas" arriba
5. Verifica que MongoDB esté ejecutándose en localhost:27017

## 📊 Estado Actual del Proyecto

**Versión**: v1.2.0  
**Última actualización**: 24 de Agosto, 2025  
**Django**: 5.2.5  
**Python**: 3.13  
**Base de datos**: SQLite + MongoDB  
**Estado**: ✅ Funcionando correctamente

**Funcionalidades implementadas:**
- ✅ Servidor Django funcionando
- ✅ Conexión a MongoDB establecida
- ✅ Página principal (index.html) configurada
- ✅ Rutas organizadas (index como principal, home como secundaria)
- ✅ Migraciones aplicadas correctamente
- ✅ Admin de Django accesible

## 🚀 Próximos Pasos

- [x] Configurar MongoDB con mongoengine
- [x] Actualizar Django a versión 5.2.5
- [x] Solucionar compatibilidad con Python 3.13
- [x] Reorganizar estructura de templates
- [x] Configurar rutas principales
- [ ] Crear archivo `requirements.txt`
- [ ] Agregar más funcionalidades al carrito
- [ ] Implementar sistema de usuarios
- [ ] Agregar estilos CSS
- [ ] Configurar autenticación en MongoDB
- [ ] Crear modelos de ejemplo con mongoengine
