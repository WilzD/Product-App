// here we are making a function so that we avoid using __dirname evrery time we call a path
const path=require('path')
module.exports=path.dirname(process.mainModule.filename)