
# DEFINICIÓN DE LA CLASE HOTEL
"""
    Clase que representa el Hotel 
    Atributos:
        * nombre
        * ubicación
        * servicios
        * categoría
        * teléfono
        * cantidad de habitaciones
    """

class Hotel:
    

    # Método constructor 
    def __init__(self, nombre, ubicacion, servicios, categoria, telefono, cantidad_habitaciones):
        self.nombre = nombre
        self.ubicacion = ubicacion
        self.servicios = servicios
        self.categoria = categoria
        self.telefono = telefono
        self.cantidad_habitaciones = cantidad_habitaciones
        self.habitaciones = []  # Lista para agregar habitaciones (agregación) # el hotel tiene habitaciones, pero  pueden existir independientemente.

    # Método para agregar habitación (agregación)
    def agregar_habitacion(self, habitacion):
        self.habitaciones.append(habitacion)

    # Métodos
    def mostrar_info(self):
        print(f"**** INFO DE {self.nombre} *****")
        print(f"Ubicación: {self.ubicacion}")
        print(f"Servicios: {self.servicios}")
        print(f"Categoría: {self.categoria}")
        print(f"Teléfono: {self.telefono}")
        print(f"Cantidad de habitaciones: {self.cantidad_habitaciones}")
        
        for habitacion in self.habitaciones:
            habitacion.mostrar_habitacion()






