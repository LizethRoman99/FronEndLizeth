const url = 'https://proveedoresapi2.onrender.com/empleados';


const listarEmpleados= async () => {
    // Objeto del html donde se desplegará la información
    let objectId = document.getElementById('contenido');
    let contenido = ''; // Contiene filas y celdas que se desplegarán en el tbody

    // Fetch permite realizar peticiones http a una url
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then((res) => res.json()) // Obtener respuesta de la petición
    .then(function (data) { // Se manipulan los datos obtenidos de la url
        let listaEmpleados = data.msg; // msg es el nombre de la lista retorna con json
        console.log(listaEmpleados);

        listaEmpleados.forEach(function (empleado) {
            // Se agrego esta línea para que los valores carguen en el formulario y se puedan editar para enviarlo por la url
            objetoEmpleados = Object.keys(empleado).map(key => key + '=' + encodeURIComponent(empleado[key])).join('&');
            console.log(empleado);
            contenido += `<tr>` +
            `<td>${empleado.nombreCompleto}</td>` +
            `<td>${empleado.documento}</td>` +
            `<td>${empleado.celular}</td>` +
            `<td>${empleado.fechaNacimiento}</td>` +
            `<td>${empleado.estado}</td>` +

                `<td class="icons">` +
                    `<div>` +
                        `<button type="button" class="btn" >` +
                            `<img src="../img/pencil.ico" alt="" class="iconos-listar"  onclick="redireccionarEditar('${objetoEmpleados}')">` +
                        `</button>` +
                    `</div>` +
                    `<div>` +
                        
                            `<button type="button" class="btn" onclick="visualizar('${objetoEmpleados}')">` +
                                `<img src="../img/show.ico" alt="" class="iconos-listar">` +
                            `</button>` +
                    `</div>` +
                    `<div>` +
                        `<button type="button" class="btn" >` +
                            `<img src="../img/delete.ico" alt="" class="iconos-listar"  onclick="confirmarEliminar('${empleado.documento}')">` +
                        `</button>` +
                    `</div>` +
                    `<div class="form-check form-switch checkeo">` +
                        `<input class="form-check-input btn-switch" type="checkbox" role="switch" id="flexSwitchCheckDefault">` +
                    `</div>` +
                `</td>` +
                `</tr>`;
        });
        console.log(objectId);
        objectId.innerHTML= contenido;

    });
}
const agregarEmpleado = async (datosEmpleado) => {
    // Hacer la solicitud para agregar el nuevo proveedor
    await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(datosEmpleado)
    });

    // Después de agregar el proveedor, actualizar la tabla
    listarEmpleados();
}

// Llamar a la función cuando se carga la página
listarEmpleados();


const registrarEmpleado= () => {
    const nombre = document.getElementById('nombreCompleto').value;
    const documento = document.getElementById('documento').value
    const celular = document.getElementById('celular').value
    const contraseña = document.getElementById('contraseña').value
    const confirmacionContraseña = document.getElementById('confirmacionContraseña').value
    const fechaNacimiento = document.getElementById('fechaNacimiento').value
    const fechacontratacion = document.getElementById('fechacontratacion').value
    const fechaTerminacion = document.getElementById('fechaTerminacion').value
    const correo = document.getElementById('correo').value
   

    if(nombreCompleto.length == 0){
        document.getElementById('nombreHelp').innerHTML= 'Dato requerido'
    }
    else if(contraseña != confirmacionContraseña){
        alert('Las contraseñas no coinciden')
    }
   
    else{
        let empleado ={//variables de clave deben ser las mismas de la api
            nombreCompleto:nombre,
            documento: documento, //lo primero es la clave, lo segundo es lo que se va a enviar.
            celular:celular,
            contraseña: contraseña,
            confirmacionContraseña:confirmacionContraseña,
            fechaNacimiento:fechaNacimiento,
            fechacontratacion:fechacontratacion,
            fechaTerminacion:fechaTerminacion,
            correo:correo
        }
        //body= JSON.stringify(proveedor)
        //alert(body)
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(empleado), //Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            alert(json.msg);//Imprimir el mensaje de la transacción
           
        })
    }

}
const actualizarEmpleado= () => {
    
    const nombre = document.getElementById('nombreCompleto').value;
    const documento = document.getElementById('documento').value
    const celular = document.getElementById('celular').value
    const contraseña = document.getElementById('contraseña').value
    const confirmacionContraseña = document.getElementById('confirmacionContraseña').value
    const fechaNacimiento = document.getElementById('fechaNacimiento').value
    const fechacontratacion = document.getElementById('fechacontratacion').value
    const fechaTerminacion = document.getElementById('fechaTerminacion').value
    const correo = document.getElementById('correo').value

    if(nombre.length == 0){
        document.getElementById('nombreHelp').innerHTML= 'Dato requerido'
    }
    else if(contraseña != confirmacionContraseña){
        alert('Las contraseñas no coinciden')
    }
   
    else{
        let empleado ={//variables de clave deben ser las mismas de la api
            nombreCompleto:nombre,
            documento: documento, //lo primero es la clave, lo segundo es lo que se va a enviar.
            celular:celular,
            contraseña: contraseña,
            confirmacionContraseña:confirmacionContraseña,
            fechaNacimiento:fechaNacimiento,
            fechacontratacion:fechacontratacion,
            fechaTerminacion:fechaTerminacion,
            correo:correo
        }
   
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(empleado), //Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            console.log(json); 
            alert(json.msg)//Imprimir el mensaje de la transacción
            listarEmpleados();
        })
    }

}
const redireccionarEditar=(objetoEmpleados) =>{
    document.location.href='/empleados?empleado='+objetoEmpleados
  
}
const editarEmpleado=() =>{ 
    console.log('Entré a editarProveedor');
    var urlParams = new URLSearchParams(window.location.search);
    document.getElementById('nombreCompleto').value =urlParams.get('nombreCompleto')
    document.getElementById('documento').value =urlParams.get('documento')
    document.getElementById('celular').value =urlParams.get('celular')
    document.getElementById('contraseña').value =urlParams.get('contraseña')
    document.getElementById('confirmacionContraseña').value =urlParams.get('confirmacionContraseña')
    document.getElementById('fechaNacimiento').value =urlParams.get('fechaNacimiento')
    document.getElementById('fechacontratacion').value =urlParams.get('fechacontratacion')
    document.getElementById('fechaTerminacion').value =urlParams.get('fechaTerminacion')
    document.getElementById('correo').value =urlParams.get('correo')
    document.getElementById('btnActualizar').style.display = 'block';
   
    verificarEditar();
    
function verificarEditar() {
    var urlParams = new URLSearchParams(window.location.search);
    var empleado = urlParams.get('empleado');
  
    if (empleado) {
      // Estás en la página de edición
      document.getElementById('btnActualizar').style.display = 'block';
      document.getElementById('btnRegistrar').style.display = 'none'
    } else {
      // No estás en la página de edición
      document.getElementById('btnActualizar').style.display = 'none';
    } 
}
}
const visualizarEmpleado=() =>{ 
    var urlParams = new URLSearchParams(window.location.search);
    document.getElementById('nombreCompleto').value =urlParams.get('nombreCompleto')
    document.getElementById('documento').value =urlParams.get('documento')
    document.getElementById('celular').value =urlParams.get('celular')
    document.getElementById('contraseña').value =urlParams.get('contraseña')
    document.getElementById('confirmacionContraseña').value =urlParams.get('confirmacionContraseña')
    document.getElementById('fechaNacimiento').value =urlParams.get('fechaNacimiento')
    document.getElementById('fechacontratacion').value =urlParams.get('fechacontratacion')
    document.getElementById('fechaTerminacion').value =urlParams.get('fechaTerminacion')
    document.getElementById('correo').value =urlParams.get('correo')

}

const visualizar=(objetoEmpleados) =>{
    document.location.href='/visualizarempleado?empleado='+objetoEmpleados
}

async function eliminarEmpleado(documento) {
    try {
        const response = await fetch(`http://localhost:8282/empleados?documento=${documento}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // Puedes incluir otros encabezados si es necesario
            },
        });

        if (!response.ok) {
            throw new Error(`Error al eliminar empleado: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Empleado  eliminado:', data.msg);

        // Puedes mostrar un mensaje de éxito al usuario si es necesario
        alert('Proveedor eliminado exitosamente');

        // Puedes realizar otras acciones aquí si es necesario
    } catch (error) {
        console.error('Error al eliminar empleado:', error.message);
        // Puedes mostrar un mensaje de error al usuario si es necesario
        alert('Error al eliminar empleado');
        // Puedes manejar errores aquí según tus necesidades
    }
}

function confirmarEliminar(documento) {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este empleado?');

    if (confirmacion) {
        // Llamar a la función eliminarProveedor con el nit del proveedor
        eliminarEmpleado(documento);
    } else {
        console.log('Eliminación cancelada por el usuario.');
    }
}



if (document.querySelector('#btnRegistrar')){ //Si objeto existe
    document.querySelector('#btnRegistrar')
.addEventListener('click', registrarEmpleado)
}

if (document.querySelector('#btnActualizar')){
     document.querySelector('#btnActualizar')
 .addEventListener('click', actualizarEmpleado)
}

