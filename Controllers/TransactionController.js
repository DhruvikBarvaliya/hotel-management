const client = require('../Config/Config')

module.exports = {
    addTransaction: (req, res) => {
        const { transaction_name, customer_id, employee_id, reservation_id, transaction_date } = req.body
        client.query("insert into transactions (transaction_name,customer_id,employee_id,reservation_id,transaction_date) values ($1,$2,$3,$4,$5)", [transaction_name, customer_id, employee_id, reservation_id, transaction_date], (error, result) => {
            if (error) {
                throw error;
            }
            res.status(201).send("Transaction Added")
        })

    },
    getAllTransaction: (req, res) => {

    },
    getTransactionById: (req, res) => {

    },
    updateTransaction: (req, res) => {

    },
    deleteTransaction: (req, res) => {

    }
}