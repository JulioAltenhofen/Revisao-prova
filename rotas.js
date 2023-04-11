const express = require("express")

const routes = express.Router()

let lista = [ {"id":1,"nome":"Joao","idade":20},
              {"id":2,"nome":"Maria","idade":19},  
              {"id":3,"nome":"Paulo","idade":21}]

routes.get("/:id",(req,res)=>(
    res.status(200).json(lista[req.params.id-1])
))
            

routes.get("/:id",(req,res)=>(
    res.status(200).json(lista[req.params.id-1])
))



module.exports = routes