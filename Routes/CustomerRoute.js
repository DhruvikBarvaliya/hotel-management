const express = require('express');
const router = express.Router()
const customerController = require('../Controllers/CustomerController')


router.get('/', (req, res) => {
    res.send("Inside CustomerRouter")
})

router.post('/addCustomer', customerController.addCustomer);
router.get('/getAllCustomer', customerController.getAllCustomer);
router.get('/getCustomerById?:id', customerController.getCustomerById);
router.put('/updateCustomer?:id', customerController.updateCustomer);
router.delete('/deleteCustomer?:id', customerController.deleteCustomer);

module.exports = router;