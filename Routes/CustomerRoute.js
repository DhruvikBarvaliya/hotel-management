const express = require('express');
const router = express.Router()
const customerController = require('../Controllers/CustomerController')


router.get('/',(req,res)=>{
    res.send("Inside CustomerRouter")
})

router.post('/addCustomer' ,customerController.addCustomer);
router.get('/getAllCustomer', customerController.getAllCustomer);
router.get('/getCustomerById?id', customerController.getCustomerById);
router.get('/updateCustomer', customerController.updateCustomer);
router.get('/deleteCustomer', customerController.deleteCustomer);

module.exports= router;