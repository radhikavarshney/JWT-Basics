const login = async (req,res)=>
{
    res.send('fake Login/Register/Signup Route')
}


const dashboard = async (req,res)=>{
    const luckyNumber=Math.floor(Math.random()*100)
    res.status(200).json ({msg:"hello, bitch !!",secret:`here is your mess, take it over!!!........and bitch , your lucky no is: ${luckyNumber}`})
}

module.exports ={
    login,
    dashboard
}