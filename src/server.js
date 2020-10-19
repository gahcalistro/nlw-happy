const express = require('express');
const server = express();
const path = require('path'); // Controle de pastas, gerencia o direcionamento da maneira correta.
const pages = require('./pages')


server
    // Static Files
    .use(express.static('public'))

    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // Route
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
        
        // (req, res) => {
        // return res.send('Oi, eu sou o backend') 
        // console.log(__dirname + '/views')
        // console.log(path.join(__dirname, 'views', 'index.html'))

        // console.log(req.query) | Query acessa os dados enviados pelo navegador ?data
        // res.sendFile(path.join(__dirname, 'views', 'index.html'))
        // const city = req.query.city
        // return res.render('index', {city})  })

// Server Init
server.listen(5500)