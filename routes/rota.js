const express =require('express')

const router = express.Router()

const {getDarvin,createDarvin}=require('../controller/controller')


router.route('/:darvinlink').get(getDarvin)
router.route('/creat').post(createDarvin)

module.export=router    