from mongoengine import connect
from django.conf import settings

def connect_to_mongodb():
    """Conectar a MongoDB usando mongoengine"""
    try:
        connect(
            db=settings.MONGODB_NAME,
            host=settings.MONGODB_HOST,
            port=settings.MONGODB_PORT
        )
        print(f"✅ Conectado a MongoDB: {settings.MONGODB_HOST}:{settings.MONGODB_PORT}/{settings.MONGODB_NAME}")
    except Exception as e:
        print(f"❌ Error conectando a MongoDB: {e}")
        print("💡 Asegúrate de que MongoDB esté ejecutándose")
