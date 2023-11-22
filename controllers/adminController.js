const path=require('path')
const rootDir=require('../util/path')
exports.showProduct=(req,res,next)=>{
    //older way
    // res.sendFile(path.join(__dirname,'../','views','addProducts.html'))
    //we are using join because it normalize the resulting path for linux, window
    // __dirname is global variable which holds the path of folders of this particular project
    //../ we are out two level ->adminpage ->routes
    //then we are giving folder name and then exact file name

    //new way
    res.sendFile(path.join(rootDir,'views','addProducts.html'))
}

exports.postProduct=(req,res,next)=>{ //using post so that /products route cannot be acees from browser 
    console.log(req.body.title) //here we got our input value, but before getting it we have to parse it by insatlling an package npm install --save body-parser
    res.redirect('/')
}