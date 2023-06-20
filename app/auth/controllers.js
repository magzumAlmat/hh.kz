const sendVerificationEmail=(req,res)=>{
    console.log(req.body)
    res.status(200).end()
    // res.send('Mail SENDED')
}
module.exports={
    sendVerificationEmail
}