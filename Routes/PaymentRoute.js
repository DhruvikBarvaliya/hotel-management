const express = require('express');
const router = express.Router();
const paymentController = require('../Controllers/PaymentController');


router.get('/',(req,res)=>{
    res.send("Inside PaymentRouter");
});

router.post('/addPayment' ,paymentController.addPayment);
router.get('/getAllPayment', paymentController.getAllPayment);
router.get('/getPaymentById/:id', paymentController.getPaymentById);
router.get('/updatePayment', paymentController.updatePayment);
router.get('/deletePayment', paymentController.deletePayment);

module.exports= router;