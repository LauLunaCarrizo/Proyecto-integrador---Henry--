const users = require("../utils/users")

function Login(req,res){
    const {email, password} = req.query;
    if(email === users[0].email && password === users[0].password){
        res.status(200).json({access:true})
    }else{
        res.status(200).json({access:false})
    }
}

module.exports = Login;