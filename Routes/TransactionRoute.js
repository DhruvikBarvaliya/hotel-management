const express = require('express');
const router = express.Router();
const transactionController = require('../Controllers/TransactionController');


router.get('/', (req, res) => {
    res.send("Inside TransactionRouter");
});

router.post('/addTransaction', transactionController.addTransaction);
router.get('/getAllTransaction', transactionController.getAllTransaction);
router.get('/getTransactionById/:id', transactionController.getTransactionById);
router.put('/updateTransaction/:id', transactionController.updateTransaction);
router.delete('/deleteTransaction/:id', transactionController.deleteTransaction);

module.exports = router;