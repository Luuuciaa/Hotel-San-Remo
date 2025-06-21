from django.contrib import admin
from .models import Hotel , Habitacion , Reserva
# Register your models here.
admin.site.register(Habitacion)
admin.site.register(Hotel)
admin.site.register(Reserva)