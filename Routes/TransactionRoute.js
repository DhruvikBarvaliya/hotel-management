const express = require('express');
const router = express.Router();
const transactionController = require('../Controllers/TransactionController');


router.get('/',(req,res)=>{
    res.send("Inside TransactionRouter");
});

router.post('/addTransaction' ,transactionController.addTransaction);
router.get('/getAllTransaction', transactionController.getAllTransaction);
router.get('/getTransactionById', transactionController.getTransactionById);
router.get('/updateTransaction', transactionController.updateTransaction);
router.get('/deleteTransaction', transactionController.deleteTransaction);

module.exports= router;