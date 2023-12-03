function validarNombre() {
    var inputNombre = document.getElementById('nombreCompleto');
    var mensajeError = document.getElementById('mensajeError');

    // Expresión regular para validar que solo contiene letras y espacios
    var regex = /^[A-Z][a-zA-Z\s]{10,49}$/


    if (regex.test(inputNombre.value)) {
        inputNombre.classList.remove('invalido');
        inputNombre.classList.add('valido');
        mensajeError.textContent = '';
    } else {
        inputNombre.classList.remove('valido');
        inputNombre.classList.add('invalido');
        mensajeError.textContent = 'Ingrese un nombre válido (primera letra mayuscula).';
    }
}

function validarCedula() {
    var inputCedula = document.getElementById('documento');
    var mensajeError = document.getElementById('mensajeErrorCedula');

    var regex = /^\d{10}$/;
    var cedula = inputCedula.value;  // Obtén el valor del input

    if (regex.test(cedula)) {
        inputCedula.classList.remove('invalido');
        inputCedula.classList.add('valido');
        mensajeError.textContent = '';
        mensajeError.style.color = ''; // Restablece el color del mensaje
        console.log("La cédula es válida.");
    } else {
        inputCedula.classList.remove('valido');
        inputCedula.classList.add('invalido');
        mensajeError.textContent = 'Ingrese una cédula válida (solo números y debe tener 10 dígitos).';
        mensajeError.style.color = 'red'; // Establece el color del mensaje a rojo
        console.log("La cédula no es válida.");
    }
}

function validarCelular() {
    // Expresión regular para aceptar solo números
    var regex = /^[0-9]{10}$/;

    var inputCelular = document.getElementById('celular');
    var mensajeErrorCelular = document.getElementById('mensajeErrorCelular');

    if (regex.test(inputCelular.value)) {
        inputCelular.classList.remove('invalido');
        inputCelular.classList.add('valido');
        mensajeErrorCelular.textContent = '';
    } else {
        inputCelular.classList.remove('valido');
        inputCelular.classList.add('invalido');
        mensajeErrorCelular.textContent = 'Ingrese un número de celular válido (solo números).';
    }
}

function validarContraseña() {
    var inputContraseña = document.getElementById('contraseña');
    var inputConfirmacion = document.getElementById('confirmacionContraseña');
    var mensajeErrorContraseña = document.getElementById('mensajeErrorContraseña');
    var mensajeErrorConfirmacion = document.getElementById('mensajeErrorConfirmacion');

    // Expresión regular para aceptar solo letras y números, mínimo 5 caracteres
    var regex = /^[a-zA-Z0-9]{8,15}$/;

    var contraseña = inputContraseña.value;
    var confirmacion = inputConfirmacion.value;

    if (regex.test(contraseña)) {
        inputContraseña.classList.remove('invalido');
        inputContraseña.classList.add('valido');
        mensajeErrorContraseña.textContent = '';
    } else {
        inputContraseña.classList.remove('valido');
        inputContraseña.classList.add('invalido');
        mensajeErrorContraseña.style.color = '#dc3545';
        mensajeErrorContraseña.textContent = 'La contraseña no es válida. Debe tener al menos 5 caracteres y solo puede contener letras y números.';
    }

    if (contraseña === confirmacion) {
        inputConfirmacion.classList.remove('invalido');
        inputConfirmacion.classList.add('valido');
        mensajeErrorConfirmacion.textContent = '';
    } else {
        inputConfirmacion.classList.remove('valido');
        inputConfirmacion.classList.add('invalido');
        mensajeErrorConfirmacion.textContent = 'Las contraseñas no coinciden.';
    }
}



function validarfechanacimiento() {
var inputFechaNacimiento = document.getElementById('fechaNacimiento');
var mensajeErrorFechaNacimiento = document.getElementById('mensajeErrorFechaNacimiento');

var fechaActual = new Date();

// Calcular la fecha de hace 18 años
var fechaHace18Años = new Date();
fechaHace18Años.setFullYear(fechaHace18Años.getFullYear() - 18);

// Obtener la fecha de nacimiento del input
var fechaNacimiento = new Date(inputFechaNacimiento.value);

// Comparar la fecha de nacimiento con la fecha de hace 18 años
if (fechaNacimiento > fechaHace18Años) {
    // La persona es menor de 18 años, mostrar mensaje de error
    inputFechaNacimiento.classList.remove('valido');
    mensajeErrorFechaNacimiento.style.color = '#dc3545';
    mensajeErrorFechaNacimiento.textContent = 'Debe ser mayor de 18 años.';
    inputFechaNacimiento.classList.add('invalido');
    return false;
} else {
    // La persona es mayor de 18 años, quitar mensaje de error y estilos
    mensajeErrorFechaNacimiento.textContent = '';
    inputFechaNacimiento.classList.remove('invalido'); // Quitala clase de invalido si estaba presente
   
}

}function validarFechas() {
    const fechaContratacion = new Date(document.getElementById('fechacontratacion').value);
    const fechaTerminacion = new Date(document.getElementById('fechaTerminacion').value);
    const mensajeErrorFechas = document.getElementById('mensajeErrorFechas2');
    const fechaContratacionInput = document.getElementById('fechacontratacion');
    const fechaTerminacionInput = document.getElementById('fechaTerminacion');

    if (isNaN(fechaContratacion.getTime()) || isNaN(fechaTerminacion.getTime())) {
        // Si alguna de las fechas no es válida
        mensajeErrorFechas.textContent = 'Ingrese fechas válidas';
        mensajeErrorFechas.style.color = 'red';
        fechaContratacionInput.style.borderColor = 'red';
        fechaTerminacionInput.style.borderColor = 'red';
    } else {
        if (fechaTerminacion < fechaContratacion) {
            // Fecha de terminación menor que fecha de contratación
            mensajeErrorFechas.textContent = 'La fecha de terminación debe ser mayor que la fecha de contratación';
            mensajeErrorFechas.style.color = 'red';
            fechaContratacionInput.style.borderColor = 'red';
            fechaTerminacionInput.style.borderColor = 'red';
        } else {
            // Fechas válidas
            mensajeErrorFechas.textContent = 'Fechas válidas';
            mensajeErrorFechas.style.color = 'green';
            fechaContratacionInput.style.borderColor = 'green';
            fechaTerminacionInput.style.borderColor = 'green';
        }
    }
}



  function validarCorreo() {
    var correoInput = document.getElementById('correo');
    var mensajeErrorCorreo = document.getElementById('mensajeErrorCorreo');
    
    // Expresión regular para validar el formato de correo electrónico
    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correoInput.value.trim() === '') {
      // El campo está vacío, muestra un mensaje de error y aplica el estilo de entrada inválida
      mensajeErrorCorreo.innerHTML = 'Por favor, ingrese su correo electrónico.';
      mensajeErrorCorreo.style.color = 'red';
      correoInput.classList.remove('valido');
      correoInput.classList.add('invalido');
    } else if (!regexCorreo.test(correoInput.value)) {
      // El formato del correo electrónico no es válido, muestra un mensaje de error y aplica el estilo de entrada inválida
      mensajeErrorCorreo.innerHTML = 'Por favor, ingrese un correo electrónico válido.';
      mensajeErrorCorreo.style.color = 'red';
      correoInput.classList.remove('valido');
      correoInput.classList.add('invalido');
    } else {
      // La entrada es válida, borra el mensaje de error y aplica el estilo de entrada válida
      mensajeErrorCorreo.innerHTML = '';
      mensajeErrorCorreo.style.color = 'green';
      correoInput.classList.add('valido');
      correoInput.classList.remove('invalido');
    }
}
// var selectElement = document.getElementById('seguridadSocial');
// var mensajeError = document.getElementById('mensajeErrorSeguridadSocial');

// selectElement.addEventListener('change', validarSeguridadSocial);

// function validarSeguridadSocial() {
//     var valorSeleccionado = selectElement.value;

//     if (valorSeleccionado !== "") {
//         // Opción válida
//         selectElement.style.borderColor = 'green';
//         mensajeError.textContent = '';
//         console.log("La selección de Seguridad Social es válida: " + valorSeleccionado);
//     } else {
//         // Opción no válida
//         selectElement.style.borderColor = 'red';
//         mensajeError.textContent = 'Seleccione una opción válida para Seguridad Social.';
//         console.log("La selección de Seguridad Social no es válida.");
//     }
// }



// Agrega las funciones de validación para los otros campos según sea necesario

// Función de validación global
function validarFormulario() {
    // Agrega aquí las llamadas a las funciones de validación individuales
    validarNombre();
    validarCedula();
    validarCelular();
    validarContraseña();
    validarfechanacimiento();
    validarFechas() 
    validarCorreo()
    // Puedes agregar más validaciones según sea necesario

    // Si todos los campos son válidos, permite el envío del formulario
    // De lo contrario, muestra un mensaje de error y no envía el formulario
    if (todosLosCamposSonValidos()) {
        alert("Formulario enviado correctamente");
    } else {
        alert("Corrija los errores antes de enviar el formulario");
    }
}

function todosLosCamposSonValidos() {
    // Agrega aquí la lógica para verificar si todos los campos son válidos
    // Por ejemplo, verifica las clases de los elementos y retorna true o false
    // según corresponda
    return true; // Cambia esto según tus necesidades
}
//enrutamiento
//modal de guardar cambios
// function mostrarModal() {
//     // Obtiene la instancia de la modal utilizando Bootstrap
//     var miModal = new bootstrap.Modal(document.getElementById('miModal'));
    
    
//     miModal.show();
//   }

  //redirigir el aceptar al formulario
  document.getElementById('btnAceptar').addEventListener('click', function() {
  
    window.location.href = 'formularioEmpleados.html';  // Reemplaza '/ruta-de-tu-formulario.html' con la ruta correcta
  });

  //modal de cancelar
// function realizarAccionCancelar() {
//     // Aquí puedes agregar lógica adicional si es necesario
//     // Por ejemplo, redirección a otra página o ejecutar alguna acción específica
//     console.log('Acción de cancelar realizada');

//     // Cierra el modal después de realizar la acción
//     var miModal = new bootstrap.Modal(document.getElementById('miModal'));
//     miModal.hide();
// }
// document.getElementById('btnCancelar').addEventListener('click', function() {
  
//     window.location.href = 'formularioEmpleados.html';  // Reemplaza '/ruta-de-tu-formulario.html' con la ruta correcta
//   });

  //modal de cambio de estado
//   var switchElement = document.getElementById('flexSwitchCheckDefault');
//   switchElement.addEventListener('change', function() {
//     // Muestra u oculta el modal según el estado del switch
//     var modal = new bootstrap.Modal(document.getElementById('modalestado'));
//     if (switchElement.checked) {
//       modal.show();
//     } else {
//       modal.hide();
//     }
//   });








