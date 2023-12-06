const url = 'https://proveedoresapi2.onrender.com/proveedores';
// const url='http://localhost:8282/empleados'


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
       
    });
}

//paginado





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
    const precioDolar = document.getElementById('precioDolar').value
    
  

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
    else if(preciodolar.length == 0){
        document.getElementById('NumerocontactoHelp').innerHTML = 'Dato requerido'
    }
    else{
        let proveedor ={//variables de clave deben ser las mismas de la api
            nombreProveedor: nombreProveedor, //lo primero es la clave, lo segundo es lo que se va a enviar.
            nit:nit,
            direccion: direccion,
            correo:correo,
            nombreContacto:nombreContacto,
            numeroContacto:numeroContacto,
            precioDolar:precioDolar

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
            Swal.fire({
                position: "center",
                icon: "success",
                title: (json.msg),
                showConfirmButton: false,
                timer: 1500
              });
              setTimeout(() => {
                regresarListar();
            }, 1000);////Imprimir el mensaje de la transacción
           
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
    const precioDolar = document.getElementById('precioDolar').value
   

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
    else if(precioDolar.length == 0){
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
            numeroContacto:numeroContacto,
            precioDolar:precioDolar

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
            Swal.fire({
                position: "center",
                icon: "success",
                title: (json.msg),
                showConfirmButton: false,
                timer: 1500
              });
              setTimeout(() => {
                regresarListar();
            }, 1000);
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
    document.getElementById('precioDolar').value =urlParams.get('precioDolar')
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
    document.getElementById('precioDolar').value =urlParams.get('precioDolar')

}

const visualizar=(objetoProveedores) =>{
    document.location.href='/visualizarproveedor?proveedor='+objetoProveedores
}

// Función para eliminar un proveedor por su nit
async function eliminarProveedor(nit) {
    try {
        const response = await fetch(`https://proveedoresapi2.onrender.com/proveedores?nit=${nit}`, {
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
        Swal.fire({
            position: "center",
            icon: "success",
            title: (data.msg),
            showConfirmButton: false,
            timer: 1500
          });

        // Puedes realizar otras acciones aquí si es necesario
    } catch (error) {
        console.error('Error al eliminar proveedor:', error.message);
        // Puedes mostrar un mensaje de error al usuario si es necesario
        alert('Error al eliminar proveedor');
        // Puedes manejar errores aquí según tus necesidades
    }
}

function confirmarEliminar(nit) {
    Swal.fire({
        title: "¿Estás seguro de que deseas eliminar este proveedor?",        
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar"
      }).then((result) => {
        if (result.isConfirmed) {
            eliminarProveedor(nit);
        }
      });
}

// Ejemplo de uso:



if (document.querySelector('#btnRegistrar')){ //Si objeto existe
    document.querySelector('#btnRegistrar')
.addEventListener('click', registrarProveedor)
}

if (document.querySelector('#btnActualizar')){
    document.querySelector('#btnActualizar')
.addEventListener('click', actualizarProveedor)

}

// const table = document.getElementById('tablaProveedores');
// const pagination = document.getElementById('pagination');
// const prevPageButton = document.getElementById('boton1');
// const nextPageButton = document.getElementById('boton2');
// const currentPageSpan = document.getElementById('currentPage');
// let currentPage = 1;
// const itemsPerPage = 9; // Cambia esto para ajustar la cantidad de filas por página

// function showData(page) {
//   const startIndex = (page - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const paginatedData = data.slice(startIndex, endIndex);

//   table.tBodies[0].innerHTML = '';

//   for (const item of paginatedData) {
//     const row = table.tBodies[0].insertRow();
//     row.insertCell(0).textContent = item.nombreContacto;
//     row.insertCell(1).textContent = item.nit;
//     row.insertCell(2).textContent = item.direccion;
//     row.insertCell(3).textContent = item.correo;
//     row.insertCell(4).textContent = item.estado;
//     // Crear una nueva celda para las opciones
//     const opcionesCell = row.insertCell(5);
//     opcionesCell.className = 'opcion';

//     // Agregar los elementos de opciones dentro de la celda
//     opcionesCell.innerHTML = `
//           <div class="opcion">
//            <a href="visualizarAcudiente""><img src="../images/eye-svgrepo-com.svg" alt="icon" class="opc_eyes"onclick="enviarDatos()"></a> 
//             <a href="editarAcudiente"><img src="../images/editar.png" alt="icon" class="opc_edit" ></a>
// <img src="../images/borrar.png" alt="icon" class="opc_delete" onclick="eliminar()" >
//           </div>
//         `;
//   }
//   }
  

//   currentPage = page;
//   currentPageSpan.textContent = currentPage;
//   prevPageButton.disabled = currentPage === 1;
//   nextPageButton.disabled = currentPage === Math.ceil(data.length / itemsPerPage);

// prevPageButton.addEventListener('click', () => {
//   if (currentPage > 1) {
//     showData(currentPage - 1);
//   }
// });

// nextPageButton.addEventListener('click', () => {
//   if (currentPage < Math.ceil(data.length / itemsPerPage)) {
//     showData(currentPage + 1);
//   }
// });

// showData(currentPage); 
// Mostrar la primera página al cargar la página

