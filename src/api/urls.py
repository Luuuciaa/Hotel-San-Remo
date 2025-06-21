from django.urls import path
from . import views

urlpatterns = [
    path('hola_mundo/', views.inicio),
    path('info' , views.api_info) ,
    path('habitaciones' , views.HabitacionAPIView.as_view())
  
]