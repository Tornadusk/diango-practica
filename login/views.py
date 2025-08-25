from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Usuario

def is_user_logged_in(request):
    """Verificar si el usuario está logueado"""
    return 'user_id' in request.session and 'username' in request.session

def get_current_user(request):
    """Obtener el usuario actual logueado"""
    if is_user_logged_in(request):
        try:
            return Usuario.objects.get(id=request.session['user_id'])
        except Usuario.DoesNotExist:
            # Limpiar sesión si el usuario no existe
            request.session.flush()
            return None
    return None

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        # Buscar usuario en MongoDB
        try:
            usuario = Usuario.objects.get(username=username, password=password)
            
            # Crear sesión después del login exitoso
            request.session['user_id'] = str(usuario.id)
            request.session['username'] = username
            
            messages.success(request, f'¡Bienvenido {username}!')
            return redirect('/index/')  # Redirigir a la página principal
        except Usuario.DoesNotExist:
            messages.error(request, 'Usuario o contraseña incorrectos')
    
    return render(request, 'login/login.html')

def register_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        
        # Validaciones
        if password != confirm_password:
            messages.error(request, 'Las contraseñas no coinciden')
            return render(request, 'login/register.html')
        
        # Verificar si el usuario ya existe en MongoDB
        # mongoengine no tiene .exists(), usamos try/except
        try:
            Usuario.objects.get(username=username)
            messages.error(request, 'El usuario ya existe')
            return render(request, 'login/register.html')
        except Usuario.DoesNotExist:
            pass  # Usuario no existe, continuar
        
        # Verificar si el email ya está registrado
        try:
            Usuario.objects.get(email=email)
            messages.error(request, 'El email ya está registrado')
            return render(request, 'login/register.html')
        except Usuario.DoesNotExist:
            pass  # Email no existe, continuar
        
        # Obtener campos opcionales
        telefono = request.POST.get('telefono', '')
        direccion = request.POST.get('direccion', '')
        edad = request.POST.get('edad')
        
        # Convertir edad a entero si se proporciona
        if edad and edad.isdigit():
            edad = int(edad)
        else:
            edad = None
        
        # Crear nuevo usuario en MongoDB
        try:
            nuevo_usuario = Usuario(
                username=username,
                email=email,
                password=password,
                telefono=telefono,
                direccion=direccion,
                edad=edad
                # fecha_registro y fecha_actualizacion se asignan automáticamente
            )
            nuevo_usuario.save()
            
            # Login automático después del registro exitoso
            messages.success(request, f'Usuario {username} registrado y logueado exitosamente')
            
            # Crear una sesión simple (sin usar Django auth)
            request.session['user_id'] = str(nuevo_usuario.id)
            request.session['username'] = username
            
            return redirect('/index/')  # Redirigir directamente al index
        except Exception as e:
            messages.error(request, f'Error al registrar: {str(e)}')
    
    return render(request, 'login/register.html')

def logout_view(request):
    """Cerrar sesión del usuario"""
    request.session.flush()
    messages.success(request, 'Sesión cerrada exitosamente')
    return redirect('login:login')
