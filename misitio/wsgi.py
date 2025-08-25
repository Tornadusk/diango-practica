"""
WSGI config for misitio project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'misitio.settings')

# Conectar a MongoDB al iniciar la aplicación
try:
    from .mongo_config import connect_to_mongodb
    connect_to_mongodb()
except ImportError:
    pass

application = get_wsgi_application()
