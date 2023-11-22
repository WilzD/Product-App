const express=require('express')
const router=express.Router()
const path=require('path')
const rootDir=require('../util/path')

router.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactUs.html'))
})

router.post('/contactDetails',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'))
})
module.exports=router