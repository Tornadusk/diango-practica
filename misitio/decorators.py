from functools import wraps
from django.shortcuts import redirect
from django.urls import reverse
from django.contrib import messages

def login_required(view_func):
    """
    Decorador personalizado para verificar si el usuario está autenticado.
    Si no está autenticado, redirige al login con mensaje de error.
    """
    @wraps(view_func)
    def wrapper(request, *args, **kwargs):
        # Verificar si el usuario tiene una sesión activa
        user_id = request.session.get('user_id')
        username = request.session.get('username')
        
        if user_id and username:
            # Usuario autenticado, permitir acceso
            return view_func(request, *args, **kwargs)
        else:
            # Usuario no autenticado, mostrar mensaje y redirigir al login
            messages.error(request, 'Debes iniciar sesión para acceder a esta página.')
            return redirect(reverse('login:login'))
    
    return wrapper
