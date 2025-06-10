#Importaciones 

from hotel import Hotel
from habitaciones import Habitacion
from reserva import Reserva

# Crear instancia de hotel
san_remo = Hotel (
    "San Remo World Hotel",
    "Calle 16 San Clemente del Tuyú - Buenos Aires",
    "Desayuno, Wifi, Cochera, Piscina y Media pensión",
    "⭐⭐⭐",
    "2257585109",
    14
)

# Crear instancia de habitación
habitacion_standard = Habitacion(
    "Doble Standard",
    35000,
    2,
    "Habitación con cama matrimonial, wifi, TV, baño privado, ropa de cama y baño, y ventilador de techo",
    "Disponible"
)
triple_superior = Habitacion (
    "Triple Superior",
    47000,
    3,
    "Habitación con camas individuales,wifi,TV , baño privado,ropa de camay baño ,aire acondicionado y frigobar",
    "Disponible"
)

  # Crear una reserva
reserva1 = Reserva (
    "Lucía Farrapeira",
    "lucia@gmail.com",
    "2257585109",
    "2025-12-20",
    "2025-12-25",
    2,
    habitacion_standard
)

reserva2 = Reserva (
    "Juan Pérez",
    "juanperez@email.com",
    "1122334455",
    "2025-07-10",
    "2025-07-15",
    3,
    triple_superior
)

# Agregar habitación al hotel
san_remo.agregar_habitacion(habitacion_standard)
san_remo.agregar_habitacion(triple_superior)

# Mostrar información completa
san_remo.mostrar_info()

# Confirmar la reserva
reserva1.confirmar()
reserva2.confirmar()