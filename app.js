const express = require('express');
const path = require('path');

const app=express()
const PORT = 3001;

const publicPath= path.join(__dirname, './public')
app.use(express.static(publicPath))

app.listen(PORT,() =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, './views/home.html'))
})
app.get("/register", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
})

app.get("/login", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
})
app.get("/home", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
})