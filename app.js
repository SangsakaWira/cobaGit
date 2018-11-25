const express = require("express")
const app = express()

var port = process.env.port || 3000

app.get("/",function(req,res){
    res.send({
        suhu:50
    })
})

app.listen(port,function(req,res){
    console.log("Server is starting at port "+port)
})