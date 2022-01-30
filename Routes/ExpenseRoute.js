const express = require('express');
const router = express.Router();
const expenseController = require('../Controllers/ExpenseController');


router.get('/',(req,res)=>{
    res.send("Inside IndexRouter");
});

router.post('/addExpense' ,expenseController.addExpense);
router.get('/getAllExpense', expenseController.getAllExpense);
router.get('/getExpenseById?id', expenseController.getExpenseById);
router.get('/updateExpense', expenseController.updateExpense);
router.get('/deleteExpense', expenseController.deleteExpense);

module.exports= router;