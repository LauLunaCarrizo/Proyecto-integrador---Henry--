const http = require("http")
const fs = require("fs")
const data = require("./utils/data")

const PORT = 3001

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes("/rickandmorty/character")){
        let searchIdUrl = req.url.split('/')
        let id = parseInt(searchIdUrl[searchIdUrl.length -1])
        let newObj
        let searchId = data.filter((element)=>{
            if(element.id === id){
                return  newObj = element
            }
        })
        res.writeHead(200, {'Content-Type':'application/json'})
        res.end(JSON.stringify(newObj))
    }
}).listen(PORT,  'localhost');