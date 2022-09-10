const express = require('express');
const app = express();

const db = require('./models/db')

app.get('/', async (req,res) => {
    res.send('Página inicial')
});

app.listen(8080, () => {
    console.log('Server rodando')
});

//http://localhost:8080