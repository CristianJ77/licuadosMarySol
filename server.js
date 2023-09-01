const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')  
const PORT = process.env.PORT || 3000

// Assets 
app.use(express.static('public'))


//Template (vistas, colores, vistas)
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views' ))
app.set('view engine', 'ejs')

//Rutas
app.get('/', (req,res) => {
    res.render('home')
})
app.get('/cart', (req,res) => {
    res.render('clientes/carrito')
})
app.get('/login', (req,res) => {
    res.render('auth/login')
})
app.get('/register', (req,res) => {
    res.render('auth/registro')
})


//Servidor localHost
app.listen(PORT , () => {
    console.log(`Aplicación funcionando... ${PORT}`)
})

