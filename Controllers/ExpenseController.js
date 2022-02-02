const {client} = require('../Config/Config')

module.exports = {

    addExpense: (req, res) => {
        const { expense_type, expense_description, expense_amount, expense_date, status } = req.body;
        client.query("insert into expenses(expense_type,expense_description,expense_amount,expense_date,status)values($1,$2,$3,$4,$5)", [expense_type, expense_description, expense_amount, expense_date, status], (error, results) => {
            if (error) {
                throw error
            }
            res.status(201).send(`Expense added`)
        })
    },
    getAllExpense: (req, res) => {

    },
    getExpenseById: (req, res) => {

    },
    updateExpense: (req, res) => {

    },
    deleteExpense: (req, res) => {

    }
}