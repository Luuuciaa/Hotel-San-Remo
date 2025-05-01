
// Validación de los campos del formulario de contacto

function validarFormContacto(event) {
    event.preventDefault();  // Evita el envío del formulario mientras se valida

    let nombre = document.forms["FormContacto"]["nombre"].value;
    let email = document.forms["FormContacto"]["email"].value;
    let telefono = document.forms["FormContacto"]["telefono"].value;
    let consulta = document.forms["FormContacto"]["consulta"].value;
    let contactoTelefono = document.forms["FormContacto"]["contactoTelefono"].checked;
    let contactoEmail = document.forms["FormContacto"]["contactoEmail"].checked;
    let mensaje = document.forms["FormContacto"]["mensaje"].value;


    //Validación de nombre
    if (nombre == "") {
        Swal.fire({
            icon: "warning",
            title: "¡Importante!",
            text: "El nombre no puede estar en blanco",
            showConfirmButton : false,
            timer: 1500,
        });
        return false;
    } else if (nombre.length > 50) {
        Swal.fire({
            icon: "warning",
            title: '¡Importante!',
            text: 'El nombre es demasiado largo (máximo 50 caracteres)',
            showConfirmButton : false,
            timer: 1500,
        });
        return false;
    } if (!validarNombre(nombre)) {
        Swal.fire({
            icon: "warning",
            title: "¡Importante!",
            text: "El nombre solo puede contener letras y espacios.",
            showConfirmButton : false,
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
            showConfirmButton : false,
            timer: 1500,
        });
        return false;
    } else if (!emailValido(email)) {
        Swal.fire({
            icon: "warning",
            title: "¡Importante!",
            text: "Por favor, escribe un correo electrónico válido",
            showConfirmButton : false,
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
            showConfirmButton : false,
            timer: 1500,
        });
        return false;
    } else if (!telefonoValido(telefono)) {
        Swal.fire({
            icon: "warning",
            title: "¡Importante!",
            text: "Por favor, escribe un telefono válido",
            showConfirmButton : false,
            timer: 1500,
        });
        return false;
    }
    // Validación de motivo de consulta
    if (consulta === '') {
        Swal.fire({
            icon: "warning",
            title: "¡Importante!",
            text: "Debes seleccionar el motivo de la consulta",
            showConfirmButton : false,
            timer: 1500,
        });
        return false;
    }
    //Validación de checkbok 
    if (!contactoTelefono && !contactoEmail) {
        Swal.fire({
            icon: "warning",
            title: "¡Importante!",
            text: "Debes seleccionar una forma de contacto",
            showConfirmButton : false,
            timer: 1500,
        });
        return false;
    }
    //Validación de mensaje 
    if (mensaje == "") {
        Swal.fire({
            icon: "warning",
            title: "¡Importante!",
            text: "Es necesario que escribas el  mensaje para poder enviar tu consulta",
            showConfirmButton : false,
            timer: 1500,
        });
        return false;
    }

    if (consulta.length > 200) {
        Swal.fire({
            icon: "warning",
            title: "¡Importante!",
            text: "El mensaje es demasiado largo (máximo 200 caracteres).",
            showConfirmButton : false,
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
                showConfirmButton : false,
                timer: 1500,
            }).then(() => {
                // Y después de que el usuario cierre el mensaje, envia el formulario
                document.forms["FormContacto"].submit();
            });
      //Mensaje si se cancela el envio del formulario
    } else {
        Swal.fire({
            title: "Envio cancelado",
            icon: "info",
            showConfirmButton : false,
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
let form = document.querySelector("#FormContacto");
form.addEventListener("submit", validarFormContacto)



