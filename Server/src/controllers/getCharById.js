const axios = require("axios")

const getCharById =(req,res)=>{
  let id = req.params.id
  axios(`https://rickandmortyapi.com/api/character/${id}?key={laulunacarrizo}`)
  .then(({data})=>{
    data 
    ? res.json(
      {
        id:data.id,
        status:data.status,
        name:data.name,
        species:data.species,
        origin:data.origin.name,
        image:data.image,
        gender:data.gender
      }
    )
    : res.status(400).json({message: "Not Found"})
  })
  .catch((error)=>
    res.send(500,{message: error})
  )
}

module.exports = getCharById;

