from rest_framework import serializers
from.models import Hotel , Habitacion , Reserva


class HabitacionSerealizers(serializers.ModelSerializer):
    
    class Meta:
        model = Habitacion
        #Campos que quiero serializar del modelo
        #fields= '__all__'
        fields = ['titulo','precio','cantidad_personas','estado','descripcion']
