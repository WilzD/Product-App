const express=require('express')
const router=express.Router()
const adminController=require('../controllers/adminController')

//making routes and including views
router.get('/add-product',adminController.showProduct)
router.post('/products',adminController.postProduct)
module.exports=router 