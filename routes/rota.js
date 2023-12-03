const express =require('express')

const router = express.Router(); 

const {getDarvin,createDarvin}=require('../controller/controller')

router.route('/:darvinlink').get(getDarvin) 
router.route('/create').post(createDarvin)

module.exports=router    
