
#CLASE QUE REPRESENTA LA RESERVA 
"""
    Clase que representa la reserva
    Atributos:
        * nombre completo
        *email
        *teléfono
        *fecha de entrada
        *fecha de salida
        *cantidad de personas
    """

class Reserva:
    # Método constructor 
    def __init__(self, nombre_completo, email, telefono, fecha_entrada, fecha_salida, cantidad_de_personas,habitacion):
        self.__nombre_completo = nombre_completo #Atributo privado
        self.__email = email #Atributo privado
        self.__telefono = telefono #Atributo privado
        self.fecha_entrada = fecha_entrada
        self.fecha_salida = fecha_salida
        self.cantidad_de_personas = cantidad_de_personas
        self.habitacion = habitacion  #  Asociación  la reserva está asociada a una habitación,sin que la reserva sea dueña exclusiva de la habitación.


    @property
    def nombre_completo(self):
        return self.__nombre_completo

    @property 
    def email (self):
        return self.__email
    
    @property
    def telefono(self):
        return self.__telefono



    def confirmar(self):
        print("*** CONFIRMACIÓN DE RESERVA ***")
        print (f"Se Realizo la reserva con los siguientes datos :")
        print(f" Cliente: {self.__nombre_completo}")
        print(f" Email: {self.__email}")
        print(f" Teléfono : {self.__telefono}")
        print(f" Desde {self.fecha_entrada} hasta {self.fecha_salida}")
        print(f" Cantidad de personas: {self.cantidad_de_personas}")
        print(f" HABITACIÓN RESERVADA :")
        self.habitacion.mostrar_habitacion()  # Mostrar datos de la habitación asociada
   