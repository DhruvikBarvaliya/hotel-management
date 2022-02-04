const express = require('express');
const router = express.Router();
const expenseController = require('../Controllers/ExpenseController');


router.get('/', (req, res) => {
    res.send("Inside IndexRouter");
});

router.post('/addExpense', expenseController.addExpense);
router.get('/getAllExpense', expenseController.getAllExpense);
router.get('/getExpenseById?id', expenseController.getExpenseById);
router.put('/updateExpense?:id', expenseController.updateExpense);
router.delete('/deleteExpense?:id', expenseController.deleteExpense);

module.exports = router;