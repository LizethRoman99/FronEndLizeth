const url = 'https://proveedoresapi2.onrender.com/proveedores';
let currentPage = 1; // Página actual
const itemsPerPage = 5;

const listarProveedores = async () => {
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
        let listaProveedores = data.msg; // msg es el nombre de la lista retorna con json
        console.log(listaProveedores);

        listaProveedores.forEach(function (proveedor) {
            // Se agrego esta línea para que los valores carguen en el formulario y se puedan editar para enviarlo por la url
            objetoProveedores = Object.keys(proveedor).map(key => key + '=' + encodeURIComponent(proveedor[key])).join('&');
            console.log(proveedor);

            contenido += `<tr>` +
                `<td>${proveedor.nombreProveedor}</td>` +
                `<td>${proveedor.nit}</td>` +
                `<td>${proveedor.direccion}</td>` +
                `<td>${proveedor.correo}</td>` +
                `<td>${proveedor.estado}</td>` +
                `<td class="icons">` +
                    `<div>` +
                        `<button type="button" class="btn" onclick="redireccionarEditar('${objetoProveedores}')">` +
                            `<img src="../img/pencil.ico" alt="" class="iconos-listar">` +
                        `</button>` +
                    `</div>` +
                    `<div>` +
                        
                            `<button type="button" class="btn" onclick="visualizar('${objetoProveedores}')">` +
                                `<img src="../img/show.ico" alt="" class="iconos-listar">` +
                            `</button>` +
                    `</div>` +
                    `<div>` +
                        `<button type="button" class="btn" >` +
                            `<img src="../img/delete.ico" alt="" class="iconos-listar" onclick="confirmarEliminar('${proveedor.nit}')">` +
                        `</button>` +
                    `</div>` +
                    `<div class="form-check form-switch checkeo">` +
                        `<input class="form-check-input btn-switch" type="checkbox" role="switch" id="flexSwitchCheckDefault">` +
                    `</div>` +
                `</td>` +
                `</tr>`;
        });

        objectId.innerHTML = contenido;
        updatePagination();
    });
}

//paginado
function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        listarProveedores(currentPage);
    }
}

// Función para ir a la página siguiente
function nextPage() {
    // Supongamos que tienes un total de 3 páginas (puedes obtener este valor dinámicamente)
    const totalPages = 3;

    if (currentPage < totalPages) {
        currentPage++;
        listarProveedores(currentPage);
    }
}

// Función para actualizar el estado del paginado
function updatePagination() {
    const paginationElement = document.getElementById('pagination');
    const pageLinks = paginationElement.getElementsByTagName('a');

    for (let i = 0; i < pageLinks.length; i++) {
        if (i === 1) {
            // El índice 1 es la primera página
            pageLinks[i].innerText = currentPage;
        }
    }

    // Puedes añadir lógica adicional según tus necesidades
}

// Función para agregar un nuevo proveedor
const agregarProveedor = async (datosProveedor) => {
    // Hacer la solicitud para agregar el nuevo proveedor
    await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(datosProveedor)
    });

    // Después de agregar el proveedor, actualizar la tabla
    listarProveedores();
}

// Llamar a la función cuando se carga la página
listarProveedores();




const registrarProveedor= () => {
    const nombreProveedor = document.getElementById('nombreProveedor').value;
    const nit = document.getElementById('nit').value
    const direccion = document.getElementById('direccion').value
    const correo = document.getElementById('correo').value
    const nombreContacto = document.getElementById('nombreContacto').value
    const numeroContacto = document.getElementById('numeroContacto').value
    
  

    if(nombreProveedor.length == 0){
        document.getElementById('nombreHelp').innerHTML= 'Dato requerido'

    }
    else if(nit.length == 0){
        document.getElementById('NitHelp').innerHTML= 'Dato requerido'
    }
    else if(direccion.length == 0){
        document.getElementById('DireccionHelp').innerHTML= 'Dato requerido'
    }
    else if(correo.length == 0){
        document.getElementById('CorreoHelp').innerHTML = 'Dato requerido'
    }
    else if(nombreContacto.length == 0){
        document.getElementById('NombreContactoHelp').innerHTML= 'Dato requerido'
    }
    else if(numeroContacto.length == 0){
        document.getElementById('NumerocontactoHelp').innerHTML = 'Dato requerido'
    }
    else{
        let proveedor ={//variables de clave deben ser las mismas de la api
            nombreProveedor: nombreProveedor, //lo primero es la clave, lo segundo es lo que se va a enviar.
            nit:nit,
            direccion: direccion,
            correo:correo,
            nombreContacto:nombreContacto,
            numeroContacto:numeroContacto

        }
        //body= JSON.stringify(proveedor)
        //alert(body)
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(proveedor), //Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            alert(json.msg)//Imprimir el mensaje de la transacción
           
        })
    }

}

const actualizarProveedor= () => {
    
    const nombreProveedor = document.getElementById('nombreProveedor').value
    const nit = document.getElementById('nit').value
    const direccion = document.getElementById('direccion').value
    const correo = document.getElementById('correo').value
    const nombreContacto = document.getElementById('nombreContacto').value
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


const visualizarProveedor=() =>{ 
    var urlParams = new URLSearchParams(window.location.search);
    document.getElementById('nombreProveedor').value =urlParams.get('nombreProveedor')
    document.getElementById('nit').value =urlParams.get('nit')
    document.getElementById('direccion').value =urlParams.get('direccion')
    document.getElementById('correo').value =urlParams.get('correo')
    document.getElementById('nombreContacto').value =urlParams.get('nombreContacto')
    document.getElementById('numeroContacto').value =urlParams.get('numeroContacto')

}

const visualizar=(objetoProveedores) =>{
    document.location.href='/visualizarproveedor?proveedor='+objetoProveedores
}

// Función para eliminar un proveedor por su nit
async function eliminarProveedor(nit) {
    try {
        const response = await fetch(`http://localhost:8282/proveedores?nit=${nit}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // Puedes incluir otros encabezados si es necesario
            },
        });

        if (!response.ok) {
            throw new Error(`Error al eliminar proveedor: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Proveedor eliminado:', data.msg);

        // Puedes mostrar un mensaje de éxito al usuario si es necesario
        alert('Proveedor eliminado exitosamente');

        // Puedes realizar otras acciones aquí si es necesario
    } catch (error) {
        console.error('Error al eliminar proveedor:', error.message);
        // Puedes mostrar un mensaje de error al usuario si es necesario
        alert('Error al eliminar proveedor');
        // Puedes manejar errores aquí según tus necesidades
    }
}

function confirmarEliminar(nit) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este proveedor?');

    if (confirmacion) {
        // Llamar a la función eliminarProveedor con el nit del proveedor
        eliminarProveedor(nit);
    } else {
        console.log('Eliminación cancelada por el usuario.');
    }
}

// Ejemplo de uso:
const proveedorNit = '	233456786-9'; // Aquí debes proporcionar el valor correcto de nit
confirmarEliminar(proveedorNit);


if (document.querySelector('#btnRegistrar')){ //Si objeto existe
    document.querySelector('#btnRegistrar')
.addEventListener('click', registrarProveedor)
}

if (document.querySelector('#btnActualizar')){
    document.querySelector('#btnActualizar')
.addEventListener('click', actualizarProveedor)

}

