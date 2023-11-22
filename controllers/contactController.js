
const path=require('path')
const rootDir=require('../util/path')

exports.getContact=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactUs.html'))
}

exports.postContact=(req,res,next)=>{
    console.log(req.body.Username, req.body.email,req.body.contactNumber,req.body.date,req.body.time)
    res.sendFile(path.join(rootDir,'views','success.html'))
}