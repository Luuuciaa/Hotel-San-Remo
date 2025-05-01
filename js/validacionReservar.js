// Validación de los campos del formulario de Reservar

function validarFormReservar(event) {
    event.preventDefault();  // Evita el envío del formulario mientras se valida

    let nombre = document.forms["FormReservar"]["nombre"].value;
    let email = document.forms["FormReservar"]["email"].value;
    let telefono = document.forms["FormReservar"]["telefono"].value;
    let fechaEntrada = document.forms["FormReservar"]["fechaEntrada"].value;
    let fechaSalida = document.forms["FormReservar"]["fechaSalida"].value;
    let cantidadPersonas = document.forms["FormReservar"]["cantidadPersonas"].value;
    let comentarios = document.forms["FormReservar"]["comentarios"].value;



    //Validación de nombre
    if (nombre == "") {
        Swal.fire({
            icon: "warning",
            title: "¡Importante!",
            text: "El nombre no puede estar en blanco",
            showConfirmButton: false,
            timer: 1500,

        });
        return false;
    } else if (nombre.length > 50) {
        Swal.fire({
            icon: 'warning',
            title: '¡Importante!',
            text: 'El nombre es demasiado largo (máximo 50 caracteres)',
            showConfirmButton: false,
            timer: 1500,
        });
        return false;
    }
    if (!validarNombre(nombre)) {
        Swal.fire({
            icon: "warning",
            title: "¡Importante!",
            text: "El nombre solo puede contener letras y espacios.",
            showConfirmButton: false,
            timer: 1500,
        });
        return false;
    }
    // Validación de correo electrónico
    if (email == "") {
        Swal.fire({
            icon: "warning",
            title: "¡Importante!",
            text: "El correo electrónico no puede estar en blanco",
            showConfirmButton: false,
            timer: 1500,
        });
        return false;
    } else if (!emailValido(email)) {
        Swal.fire({
            icon: "warning",
            title: "¡Importante!",
            text: "Por favor, escribe un correo electrónico válido",
            showConfirmButton: false,
            timer: 1500,
        });
        return false;
    }
    //Validación de teléfono 
    if (telefono == "") {
        Swal.fire({
            icon: "warning",
            title: "¡Importante!",
            text: "El teléfono no puede estar en blanco",
            showConfirmButton: false,
            timer: 1500,
        });
        return false;
    } else if (!telefonoValido(telefono)) {
        Swal.fire({
            icon: "warning",
            title: "¡Importante!",
            text: "Por favor, escribe un telefono válido",
            showConfirmButton: false,
            timer: 1500,
        });
        return false;
    }

    // Validación de fecha de entrada y salida
    if (fechaEntrada == "") {
        Swal.fire({
            icon: "warning",
            title: "¡Importante!",
            text: "Debes completar la fecha de entrada.",
            showConfirmButton: false,
            timer: 1500,
        });
        return false;
    }

    if (fechaSalida == "") {
        Swal.fire({
            icon: "warning",
            title: "¡Importante!",
            text: "Debes completar la fecha de salida.",
            showConfirmButton: false,
            timer: 1500,
        });
        return false;
    }


    // Validación cantidad de personas 
    if (cantidadPersonas == "") {
        Swal.fire({
            icon: "warning",
            title: "¡Importante!",
            text: "La cantidad de personas no puede estar en blanco.",
            showConfirmButton: false,
            timer: 1500,
        });
        return false;
    } else if (cantidadPersonas < 2 || cantidadPersonas > 6) {
        Swal.fire({
            icon: "warning",
            title: "¡Importante!",
            text: "La cantidad de personas debe ser entre 2 y 6.",
            showConfirmButton: false,
            timer: 1500,
        });
        return false;
    }
    //Validación de comentario
    if (comentarios !== "" && comentarios.length > 200) {
        Swal.fire({
            icon: "warning",
            title: "¡Importante!",
            text: "El mensaje es demasiado largo (máximo 200 caracteres).",
            showConfirmButton: false,
            timer: 1500,
        });
        return false;
    }

    // Si todas las validaciones pasan, muestra la confirmación
    Swal.fire({
        title: "¿Estás seguro que quieres enviar el formulario?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Enviar"
    }).then((result) => {
        if (result.isConfirmed) {
            // Muestra el mensaje de éxito 
            Swal.fire({
                title: "Formulario enviado con éxito",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                // Y después de que el usuario cierre el mensaje, envia el formulario
                document.forms["FormReservar"].submit();
            });
            //Mensaje si se cancela el envio del formulario
        } else {
            Swal.fire({
                title: "Envio cancelado",
                icon: "info",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    });
}

// Validación de nombre (solo letras y espacios)
function validarNombre(nombre) {
    const regex = /^[A-Za-z\s]+$/;  // Expresión  que permite solo letras (A-Z, a-z) y espacios (\s).
    return regex.test(nombre);
}
//Para validar número de telefono
//Esta expresión  validará cualquier cadena que contenga solo números y tenga una longitud entre 7 y 15 dígitos, y nada más.
const telefonoValido = telefono => {
    return /^[0-9]{7,15}$/.test(telefono);//Esto hece que devuelva true o false dependiendo de si el telefono cumple con el patrón.
}

// Función de validación de correo
//Esta expresión  busca un correo electrónico que siga el formato de "algo@algo.algo"
const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

let formulario = document.querySelector("#FormReservar");
formulario.addEventListener("submit", validarFormReservar)//Cuando el usuario intenta enviar el formulario , en vez de enviarlo directamente, primero ejecutá la función validarFormReservar

