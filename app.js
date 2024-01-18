const {usersdata, marketing,ventas,developers,qAs,mappedMarketers}=require("./userdata.js");
const express=require("express");
const app=express();

app.get("/",(req,res)=>{
res.send(`<h1>Hola esta es la pagina de la home</h1>
<a href="/"> Home</a> <a href="/marketing">Marketing </a>
<a href="/developer">Developer </a> <a href="/marketing"> marketing </a>
<a href="/qAs"> qAs </a> <a href="/e404"> Error 404  </a>
`)
console.log(req.path);
});

app.get("/marketing",(req,res)=>{
    res.send(`<h1>Hola esta es la pagina de Marketing</h1>
    <a href="/"> Home</a> <a href="/developer"> Developer </a>
    <a href="/marketing"> marketing </a> <a href="/qAs"> qAs </a>
    <p> ${mappedMarketers}</p>
    `)
    console.log(req.path);
})

app.get("/ventas",(req,res)=>{
    res.send(`<h1>Hola esta es la pagina de ventas</h1>
    <a href="/"> Home</a> <a href="/developer"> Developer </a>
    <a href="/marketing"> marketing </a> <a href="/qAs"> qAs </a>
    <p> ${ventas}</p>
    `)
    console.log(req.path);
})

app.get("/qAs",(req,res)=>{
    res.send(`<h1>Hola esta es la pagina de QAs</h1>
    <a href="/"> Home</a>  <a href="/developer"> Developer </a>
    <a href="/developer"> Developer </a> <a href="/developer"> Developer </a>
    <p> ${qAs}</p>
    `)
    console.log(req.path);
})

app.get("/developer",(req,res)=>{
    res.send(`<h1>Hola esta es la pagina de developers</h1>
    <a href="/"> Home</a> <a href="/marketing"> Marketing</a>
    <a href="/marketing"> marketing </a> <a href="/qAs"> qAs </a>
    <p> ${developers}</p>
    `)
    console.log(req.path);
})


app.use((req,res)=>{
    res.status(404).send(`<h1>No se ha encontrado la pagina seleccionada, por favor
    vuelve a la home </h1> <a href="/">Home</a>`)
    });

app.listen(3000,()=>{
    console.log("Escuchando en el puerto 3000")
})


console.log(usersdata);
