const express=require('express')
const router=express.Router()
const path=require('path')

const rootDir=require('../util/path')

router.get('/',(req,res,next)=>{
    //older way using path
    // res.sendFile(path.join(__dirname,'../','views','products.html'))

    //new way using our own import . rootDir nwo we can replace __dirname and ../ in older version
    res.sendFile(path.join(rootDir,'views','products.html'))

})

module.exports=router