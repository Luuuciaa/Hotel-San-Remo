#DEFINICIÓN DE LA CLASE HABITACIÓN
"""
    Clase que representa la habitación
    Atributos:
        * titulo
        * precio
        * cantidad de personas
        * descripción
        * estado
 """

class Habitacion: 
    # Método constructor 
     def __init__(self, titulo, precio, cantidad_personas, descripcion,estado):
        self.titulo = titulo
        self.precio = precio
        self.cantidad_personas = cantidad_personas
        self.descripcion = descripcion
        self.estado = estado

     def mostrar_habitacion(self):
        print(f"Habitación: {self.titulo}")
        print(f"Precio: ${self.precio}")
        print(f"Capacidad: {self.cantidad_personas} personas")
        print(f"Descripción: {self.descripcion}")
        print (f"Estado : {self.estado}")
       








