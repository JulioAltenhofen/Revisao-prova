const express = require("express");

const server = express()

const routes = require("./rotas")

server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.listen(3000,()=>{
    console.log("Servidor em execução...")
})
