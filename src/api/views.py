from django.shortcuts import render
from django.http import HttpResponse ,JsonResponse
from rest_framework.views import APIView
from .models import Habitacion
from .serializers import HabitacionSerealizers
from rest_framework.response import Response 
# Create your views here.

def inicio(request):
    mensaje = "<h1> HOTEL SAN REMO </h1>" 
    return HttpResponse(mensaje)
 
def api_info(request):

    """
    Información general de la API de San Remo 

    """

    response = {
        "message ": "Bienvenido a la API de San Remo",
        "version" : "1.0"
    }
    return JsonResponse (response)
    


#def api_habitaciones(request) :
   # habitaciones = {
      #  'titulo': 'Doble Standard',
       # 'precio' : 35000,
     #   'cantidad de personas' : 2,
     #   'descripcion': 'Habitación con cama matrimonial, wifi, TV, baño privado, ropa de cama y baño, y ventilador de techo',
      #  }
    #return JsonResponse (habitaciones)
    
 

class HabitacionAPIView(APIView):
    
    def get (self, request):
        #Voy a buscar las habitaciones en mi base de datos 
          habitacion = Habitacion.objects.all()
          #Utilizar el Serializador para convertir a una representacion JSON
          #many=True indica que estamos serializando una lista  de objetos
          serializer = HabitacionSerealizers(habitacion , many=True)
          #Devolver la lista serializada como una respuesta JSON al cliente
          return Response(serializer.data)


    
from django.urls import path
from . import views

urlpatterns = [
    path('hola_mundo/', views.inicio),  
]



