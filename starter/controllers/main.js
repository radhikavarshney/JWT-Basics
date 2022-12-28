const jwt = require('jsonwebtoken')
const {BadRequestError} = require('../errors')



const login = async (req,res)=>
{
    const {username,password}= req.body

    if (!username|| !password){
        throw new BadRequestError('Please provide email and password')
    }

    const id = new Date().getDate()

    const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn:'30d'})
 
    res.status(200).json({msg:'user created',token})
}


const dashboard = async (req,res)=>{
    console.log(req.user);
    const luckyNumber=Math.floor(Math.random()*100)


        res.status(200).json ({msg:`hello, bitch ${req.user.username} !!`,secret:`here is your mess, take it over!!!........and bitch , your lucky no is: ${luckyNumber}`})
    
    
   

    // console.log(token);
    // console.log(req.headers);
}

module.exports ={
    login,
    dashboard
}