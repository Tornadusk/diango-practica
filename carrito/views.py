from django.shortcuts import render
from misitio.decorators import login_required

@login_required
def carrito_view(request):
    """Vista del carrito de compras"""
    # Obtener información del usuario de la sesión
    user_id = request.session.get('user_id')
    username = request.session.get('username')
    
    context = {
        'user_id': user_id,
        'username': username,
    }
    
    return render(request, 'carritodecompra.html', context)
