from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


def home(request):
    return HttpResponse("<BR>Hola desde Django!<BR>")

def index(request):
    return render(request, 'index.html')