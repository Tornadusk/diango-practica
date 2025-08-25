from mongoengine import Document, StringField, DateTimeField, IntField
from datetime import datetime

class Usuario(Document):
    username = StringField(required=True, unique=True, max_length=50)
    password = StringField(required=True, max_length=100)
    email = StringField(required=True, unique=True, max_length=100)
    fecha_registro = DateTimeField(default=datetime.utcnow)
    fecha_actualizacion = DateTimeField(default=datetime.utcnow)
    telefono = StringField(max_length=15, required=False, default="")
    direccion = StringField(max_length=200, required=False, default="")
    edad = IntField(required=False, default=None)

    meta = {
        'collection': 'usuarios',
        'indexes': ['username', 'email']
    }

    def __str__(self):
        return self.username
