from django.shortcuts import render
from django.http import HttpResponse
from misitio.decorators import login_required

# Create your views here.

@login_required
def home(request):
    return HttpResponse("<BR>Hola desde Django!<BR>")

@login_required
def index(request):
    # Obtener información del usuario logueado desde la sesión
    user_id = request.session.get('user_id')
    username = request.session.get('username')
    
    # Pasar la información del usuario al template
    context = {
        'user_id': user_id,
        'username': username,
    }
    
    return render(request, 'index.html', context)