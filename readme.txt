# Proyecto Django - Sitio Web

Este es un proyecto Django que incluye múltiples aplicaciones para crear un sitio web completo.

## 📝 Historial de Actualizaciones

### v1.5.0 - Sistema de Mensajes con Auto-ocultamiento (25/08/2025)
- ✅ Mensajes de Django con auto-ocultamiento automático
- ✅ CSS inteligente para diferentes tipos de mensajes (success, error, info, warning)
- ✅ Animaciones suaves de entrada y salida para mensajes
- ✅ Estilos modernos para mensajes del sistema
- ✅ Código JavaScript simplificado y optimizado
- ✅ Eliminación de código innecesario y complejo
- ✅ Solución elegante: CSS vs JavaScript para mensajes
- ✅ Mensajes de bienvenida se ocultan después de 5 segundos
- ✅ Sistema de mensajes completamente funcional

### v1.4.0 - Sidebar Global y Reorganización de Templates (25/08/2025)
- ✅ Sidebar global implementado con funcionalidad completa
- ✅ Botón inteligente que se reposiciona automáticamente
- ✅ Header flotante que no ocupa espacio del contenido
- ✅ Contenido principal estático (no se mueve con el sidebar)
- ✅ Reorganización de templates: index.html movido a Sitio/templates/
- ✅ Estructura de archivos más organizada y profesional
- ✅ CSS moderno con glassmorphism y animaciones
- ✅ JavaScript global para funcionalidades del sidebar
- ✅ Sistema de navegación mejorado
- ✅ Protección de rutas con decorador @login_required
- ✅ Redirección automática al login para usuarios no autenticados
- ✅ Mensajes de error informativos para acceso no autorizado

### v1.3.0 - Sistema de Login y Registro con MongoDB (25/08/2025)
- ✅ Sistema de autenticación completo con MongoDB
- ✅ Formulario de registro con validaciones
- ✅ Formulario de login funcional
- ✅ Estructura de archivos estáticos por app (como Angular)
- ✅ CSS y JavaScript específicos para login
- ✅ Redirección automática después del login

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
│   ├── models.py          # Modelos de datos
│   ├── static/            # Archivos estáticos globales
│   │   ├── css/main.css   # Estilos globales del sitio
│   │   └── js/main.js     # JavaScript global del sitio
│   └── templates/         # Templates específicos de la app
│       └── index.html     # Página principal (movida aquí)
├── login/                  # Aplicación de autenticación
│   ├── models.py          # Modelo Usuario en MongoDB
│   ├── views.py           # Vistas de login y registro
│   ├── urls.py            # URLs de autenticación
│   ├── static/            # Archivos estáticos específicos
│   │   └── login/
│   │       ├── css/       # Estilos específicos de login
│   │       └── js/        # JavaScript específico de login
│   └── templates/         # Templates específicos de login
│       └── login/
│           ├── login.html # Formulario de login
│           └── register.html # Formulario de registro
├── carrito/                # Aplicación del carrito de compras
├── servicios/              # Aplicación de servicios
├── templates/              # Templates generales del proyecto
│   └── base.html          # Plantilla base con sidebar y header global
└── manage.py               # Script de administración de Django
```

## 🌐 Aplicaciones Incluidas

### Sitio (Aplicación Principal)
- **Ruta principal** (`/`): Sistema de login (página de entrada)
- **Ruta index** (`/index/`): Muestra `index.html` (página principal)
- **Ruta home** (`/index/home/`): Muestra mensaje de texto
- **Funcionalidades**:
  - ✅ Sidebar global con navegación completa
  - ✅ Header flotante con botón de logout
  - ✅ Botón inteligente del sidebar que se reposiciona
  - ✅ CSS moderno con glassmorphism y animaciones
  - ✅ JavaScript global para funcionalidades del sidebar
- ✅ Contenido principal estático (no se mueve)
- ✅ Mensajes principales de bienvenida permanecen visibles
- ✅ Mensaje personal de bienvenida con auto-ocultamiento inteligente (en todas las páginas y navegación)

### Login (Aplicación de Autenticación)
- **Ruta principal**: `/` - Sistema de login (página de entrada)
- **Ruta registro**: `/register/` - Formulario de registro
- **Templates**: `login.html` y `register.html` con CSS y JavaScript específicos
- **Funcionalidades**: 
  - ✅ Login con MongoDB
  - ✅ Registro de usuarios en MongoDB
  - ✅ Validaciones en tiempo real con JavaScript
  - ✅ Estilos CSS específicos de la app
  - ✅ Redirección automática después del login
  - ✅ Estructura de archivos estáticos por app (como Angular)

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

## 🎨 Estructura de Archivos Estáticos

### **Archivos Estáticos Globales (Sitio app)**
```
Sitio/static/
├── css/main.css           # Estilos globales del sitio
└── js/main.js             # JavaScript global del sitio
```

**Funcionalidades globales:**
- ✅ **Sidebar**: Navegación completa con animaciones
- ✅ **Header**: Header flotante con botón de logout
- ✅ **CSS moderno**: Glassmorphism, gradientes, animaciones
- ✅ **JavaScript global**: Funcionalidades del sidebar y utilidades

### **Archivos Estáticos por App (Como Angular)**
```
login/
├── static/login/
│   ├── css/login.css      # Estilos específicos de login
│   └── js/login.js        # JavaScript específico de login
└── templates/login/
    ├── login.html          # Template de login
    └── register.html       # Template de registro
```

**Ventajas:**
- ✅ **Modularidad**: Cada app maneja sus propios recursos
- ✅ **Organización**: Fácil de mantener y escalar
- ✅ **Reutilización**: CSS y JS específicos por funcionalidad
- ✅ **Separación de responsabilidades**: Login no interfiere con otras apps
- ✅ **Flexibilidad**: Login mantiene sus estilos, otras apps usan globales

## 🔒 Seguridad y Autenticación

### **Protección de Rutas**
- **Decorador `@login_required`**: Protege todas las páginas que requieren autenticación
- **Rutas protegidas**: `/index/`, `/index/home/`, `/carrito/`
- **Redirección automática**: Usuarios no autenticados son enviados al login
- **Mensajes informativos**: Se muestran mensajes de error claros

**Nota de Arquitectura**: Actualmente se usa `misitio/decorators.py` para el decorador personalizado. Para proyectos más grandes, considera migrar a `misitio/utils.py` para centralizar decoradores, funciones auxiliares y constantes comunes.

### **Sistema de Sesiones**
- **MongoDB**: Almacena información de usuarios
- **Django Sessions**: Maneja el estado de autenticación
- **Logout**: Cierra la sesión y redirige al login
- **Persistencia**: La sesión se mantiene entre páginas

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

**Versión**: v1.4.0  
**Última actualización**: 25 de Agosto, 2025  
**Django**: 5.2.5  
**Python**: 3.13  
**Base de datos**: SQLite + MongoDB  
**Estado**: ✅ Funcionando correctamente

**Funcionalidades implementadas:**
- ✅ Servidor Django funcionando
- ✅ Conexión a MongoDB establecida
- ✅ Sistema de autenticación completo con MongoDB
- ✅ Aplicación de login con estructura Angular (archivos estáticos por app)
- ✅ Formulario de registro funcional
- ✅ Formulario de login funcional
- ✅ Validaciones en tiempo real con JavaScript
- ✅ Estilos CSS específicos para login
- ✅ Redirección automática después del login
- ✅ Sidebar global con navegación completa
- ✅ Header flotante con botón de logout inteligente
- ✅ Botón del sidebar que se reposiciona automáticamente
- ✅ CSS moderno con glassmorphism y animaciones
- ✅ JavaScript global para funcionalidades del sidebar
- ✅ Contenido principal estático (no se mueve con el sidebar)
- ✅ Página principal (index.html) reorganizada en Sitio/templates/
- ✅ Rutas organizadas (login como principal, index como secundaria)
- ✅ Estructura de archivos más profesional y organizada
- ✅ Protección de rutas con decorador @login_required
- ✅ Redirección automática al login para usuarios no autenticados
- ✅ Mensajes de error informativos para acceso no autorizado
- ✅ Migraciones aplicadas correctamente
- ✅ Admin de Django accesible

## 🚀 Próximos Pasos

- [x] Configurar MongoDB con mongoengine
- [x] Actualizar Django a versión 5.2.5
- [x] Solucionar compatibilidad con Python 3.13
- [x] Reorganizar estructura de templates
- [x] Configurar rutas principales
- [x] Implementar sistema de usuarios con MongoDB
- [x] Crear aplicación de login completa
- [x] Estructura de archivos estáticos por app (como Angular)
- [x] Sistema de registro y autenticación
- [x] Sidebar global con funcionalidades completas
- [x] Header flotante y botón inteligente del sidebar
- [x] CSS moderno con glassmorphism y animaciones
- [x] Reorganización profesional de templates
- [ ] Crear archivo `requirements.txt`
- [ ] Agregar más funcionalidades al carrito
- [ ] Implementar logout y gestión de sesiones
- [ ] Agregar validaciones de seguridad adicionales
- [ ] Agregar más funcionalidades al sidebar
- [ ] Implementar sistema de notificaciones
- [ ] Considerar migración a `utils.py` para mejor organización de utilidades
