const path=require('path')

const rootDir=require('../util/path')

exports.homePage=(req,res,next)=>{
    //older way using path
    // res.sendFile(path.join(__dirname,'../','views','products.html'))

    //new way using our own import . rootDir nwo we can replace __dirname and ../ in older version
    res.sendFile(path.join(rootDir,'views','products.html'))

}