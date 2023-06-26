const sendMail = require("../utils/sendMail")
const AuthCode =require('./AuthCode')
const Role = require('./Role')
const User=require('./User')




const sendVerificationEmail=(req,res)=>{
    console.log(req.body)
    const code="HH"+Date.now()
    
    AuthCode.create({
        email:req.body.email,
        code:code,
        valid_till: Date.now() + 120000

    })
    
    sendMail(req.body.email,"Код авторизации для hh.kz",code)
    res.status(200).end()
    // res.send('Mail SENDED')
}

const verifyCode=async(req,res)=>{
    const authCode=await AuthCode.findOne({where:{email: req.body.email},order:[['id','DESC']] }  )
    if (!authCode){
        console.log(1,typeof(1))
        res.status(401).send({error:"EMAIL NOT FOUND"})
    }else if((new Date(authCode.valid_till).getTime()) < Date.now()){
        console.log(2)
        console.log(new Date(authCode.valid_till).getTime())
        console.log(Date.now())
        res.status(401).send({error:"время прошло"})
    }else if(authCode.code !== req.body.code){
        console.log(3)
        res.status(401).send({error:"код не совпадает"})
    }
    else{
        console.log(4)
        const role = await Role.findOne({where:{name: 'employee'}})
        const user=await User.create({
            roleId: role.id,
            email: req.body.email
        })
        res.status(200).send(user)
    }

    // if(){

    // }
}   


module.exports={
    sendVerificationEmail,verifyCode
}