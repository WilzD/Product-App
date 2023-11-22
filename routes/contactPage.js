const express=require('express')
const router=express.Router()

const contactController=require('../controllers/contactController')

router.get('/contact',contactController.getContact)

router.post('/contactDetails',contactController.postContact)
module.exports=router