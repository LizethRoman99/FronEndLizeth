const url = 'http://localhost:8282/empleados';
// let currentPage = 1; // Página actual
// const itemsPerPage = 5;

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
                            `<img src="../img/pencil.ico" alt="" class="iconos-listar">` +
                        `</button>` +
                    `</div>` +
                    `<div>` +
                        
                            `<button type="button" class="btn" >` +
                                `<img src="../img/show.ico" alt="" class="iconos-listar">` +
                            `</button>` +
                    `</div>` +
                    `<div>` +
                        `<button type="button" class="btn" >` +
                            `<img src="../img/delete.ico" alt="" class="iconos-listar" >` +
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
        // updatePagination();
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
const actualizarProveedor= () => {
    
    const nombreProveedor = document.getElementById('nombreCompleto').value
    const nit = document.getElementById('documento').value
    const direccion = document.getElementById('direccion').value
    const correo = document.getElementById('celular').value
    const nombreContacto = document.getElementById('contraseña').value
    const numeroContacto = document.getElementById('numeroContacto').value

    if(nombreProveedor.length == 0){
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido'

    }
    else if(nit.length == 0){
        document.getElementById('NitHelp').innerHTML = 'Dato requerido'
    }
    else if(direccion.length == 0){
        document.getElementById('DireccionHelp').innerHTML = 'Dato requerido'
    }
    else if(correo.length == 0){
        document.getElementById('CorreoHelp').innerHTML = 'Dato requerido'
    }
    else if(nombreContacto.length == 0){
        document.getElementById('NombreContactoHelp').innerHTML = 'Dato requerido'
    }
    else if(numeroContacto.length == 0){
        document.getElementById('NumerocontactoHelp').innerHTML = 'Dato requerido'
    }
    else{
        let proveedor ={
            // _id:document.getElementById('idProveedor').value,
            nombreProveedor: nombreProveedor, //lo primero es la clave, lo segundo es lo que se va a enviar.
            nit:nit,
            direccion:direccion,
            correo:correo,
            nombreContacto:nombreContacto,
            numeroContacto:numeroContacto

        }
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(proveedor), //Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            console.log(json); 
            alert(json.msg)//Imprimir el mensaje de la transacción
            listarProveedores();
        })
    }

}
const redireccionarEditar=(objetoProveedores) =>{
    document.location.href='/proveedores?proveedor='+objetoProveedores
  
}
const editarProveedor=() =>{ 
    console.log('Entré a editarProveedor');
    var urlParams = new URLSearchParams(window.location.search);
    document.getElementById('nombreProveedor').value =urlParams.get('nombreProveedor')
    document.getElementById('nit').value =urlParams.get('nit')
    document.getElementById('direccion').value =urlParams.get('direccion')
    document.getElementById('correo').value =urlParams.get('correo')
    document.getElementById('nombreContacto').value =urlParams.get('nombreContacto')
    document.getElementById('numeroContacto').value =urlParams.get('numeroContacto')
    document.getElementById('btnActualizar').style.display = 'block';
   
    verificarEditar();
    
function verificarEditar() {
    var urlParams = new URLSearchParams(window.location.search);
    var proveedor = urlParams.get('proveedor');
  
    if (proveedor) {
      // Estás en la página de edición
      document.getElementById('btnActualizar').style.display = 'block';
      document.getElementById('btnRegistrar').style.display = 'none'
    } else {
      // No estás en la página de edición
      document.getElementById('btnActualizar').style.display = 'none';
    } 
}
}


if (document.querySelector('#btnRegistrar')){ //Si objeto existe
    document.querySelector('#btnRegistrar')
.addEventListener('click', registrarEmpleado)
}

if (document.querySelector('#btnActualizar')){
     document.querySelector('#btnActualizar')
 .addEventListener('click', actualizarProveedor)
}
