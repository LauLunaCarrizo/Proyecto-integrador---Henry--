let myFavorites = [];

function postFav(req,res){
    myFavorites.push(req.body);
    res.json(myFavorites)
}

function deleteFav(req,res){
    let {id} = req.params
    myFavorites= myFavorites.filter(char=>char.id !== Number(id))
    res.json(myFavorites)
}

module.exports = {postFav,deleteFav}