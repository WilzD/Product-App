const express=require('express')
const router=express.Router()
const homePageController=require('../controllers/homePageController')
router.get('/',homePageController.homePage)
module.exports=router