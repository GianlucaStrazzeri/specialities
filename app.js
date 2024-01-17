const {usersdata}=require("./userdata.js");
const express=require("express");
const app=express();

app.get("/",(req,res)=>{
res.send(`<h1>Hola esta es la pagina de la home</h1>
<a href="/marketing">Marketing </a>
<a href="/developer">Developer </a>
<a href="/e404"> Al darle click aparecerá un error 404 ya que esta pagina no existe </a>
`)
console.log(req.path);
});

app.get("/marketing",(req,res)=>{
    res.send(`<h1>Hola esta es la pagina de Marketing</h1>
    <a href="/"> Home</a>
    <a href="/developer"> Developer </a>
    
    `)
    console.log(req.path);
})

app.get("/developer",(req,res)=>{
    res.send(`<h1>Hola esta es la pagina de developers</h1>
    <a href="/"> Home</a>
    <a href="/marketing"> Marketing</a>
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
