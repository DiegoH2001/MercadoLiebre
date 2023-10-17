const express = require('express');
const path = require('path');

const app=express()
const PORT = 3000;

const publicPath= path.join(__dirname, './public')
app.use(express.static(publicPath))

app.listen(PORT,() =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, './views/home.html'))
})