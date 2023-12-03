const express = require('express')
const path = require('path')//Trabajar con rutas
const hbs = require('hbs')//Incorporar motor de plantillas

const app = express()

const port = 8383

//Servidor de contenido estático
app.use(express.static('public'))

//Ingeniería de las vistas: hbs
//Asignar la ubicación de los archivos hbs
app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine', 'hbs')

//Configuración del directorio que guardará los archivos partials hbs
hbs.registerPartials(__dirname + '/public/views/partials');

app.get('/', (req, res) => {
    res.render('index')//Redireccionar hacia el archivo de hbs
})


app.get('/agregarPedido', (req, res) => {
    res.render('agregarPedido')
})

app.get('/compras', (req, res) => {
    res.render('compras')
})

app.get('/cotizacion', (req, res) => {
    res.render('cotizacion')
})


app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})


app.get('/editarCompra', (req, res) => {
    res.render('editarCompra')//Redireccionar hacia el archivo de hbs
})

app.get('/editarfichatecnica', (req, res) => {
    res.render('editarfichatecnica')
})

app.get('/editarPedido', (req, res) => {
    res.render('editarPedido')//Redireccionar hacia el archivo de hbs
})

app.get('/editarUsuario', (req, res) => {
    res.render('editarUsuario')//Redireccionar hacia el archivo de hbs
})

app.get('/empleados', (req, res) => {
    res.render('empleados')//Redireccionar hacia el archivo de hbs
})

app.get('/estampados', (req, res) => {
    res.render('estampados')//Redireccionar hacia el archivo de hbs
})

app.get('/fichaTecnica', (req, res) => {
    res.render('fichaTecnica')//Redireccionar hacia el archivo de hbs
})

app.get('/listarCotizacion', (req, res) => {
    res.render('listarCotizacion')//Redireccionar hacia el archivo de hbs
})

app.get('/listarEmpleados', (req, res) => {
    res.render('listarEmpleados')//Redireccionar hacia el archivo de hbs
})

app.get('/listarFichaTecnica', (req, res) => {
    res.render('listarFichaTecnica')//Redireccionar hacia el archivo de hbs
})

app.get('/listarOrdenProduccion', (req, res) => {
    res.render('listarOrdenProduccion')//Redireccionar hacia el archivo de hbs
})


app.get('/listarPedido', (req, res) => {
    res.render('listarPedido')//Redireccionar hacia el archivo de hbs
})


app.get('/login', (req, res) => {
    res.render('login')//Redireccionar hacia el archivo de hbs
})

app.get('/ordenProduccion', (req, res) => {
    res.render('ordenProduccion')//Redireccionar hacia el archivo de hbs
})

app.get('/proveedores', (req, res) => {
    res.render('proveedores')//Redireccionar hacia el archivo de hbs
})


app.get('/registrarCatInsumos', (req, res) => {
    res.render('registrarCatInsumos')//Redireccionar hacia el archivo de hbs
})


app.get('/registrarInsumos', (req, res) => {
    res.render('registrarInsumos')//Redireccionar hacia el archivo de hbs
})

app.get('/roles', (req, res) => {
    res.render('roles')//Redireccionar hacia el archivo de hbs
})


app.get('/ventas', (req, res) => {
    res.render('ventas')//Redireccionar hacia el archivo de hbs
})

app.get('/vistaCotizacion', (req, res) => {
    res.render('vistaCotizacion')//Redireccionar hacia el archivo de hbs
})



app.get('/visualizarCompra', (req, res) => {
    res.render('visualizarCompra')//Redireccionar hacia el archivo de hbs
})

app.get('/visualizarEmpleado', (req, res) => {
    res.render('visualizarEmpleado')//Redireccionar hacia el archivo de hbs
})


app.get('/visualizarFicha', (req, res) => {
    res.render('visualizarFicha')//Redireccionar hacia el archivo de hbs
})


app.get('/visualizarPedido', (req, res) => {
    res.render('visualizarPedido')//Redireccionar hacia el archivo de hbs
})


app.get('/visualizarProveedor', (req, res) => {
    res.render('visualizarProveedor')//Redireccionar hacia el archivo de hbs
})

app.get('*', (req, res) => {
    //res.sendFile(__dirname+'/public/views/404.hbs')
    res.render('404')//Redireccionar hacia el archivo de blade
})


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})