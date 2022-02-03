const { client } = require('../Config/Config')

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
        client.query("select * from expenses", (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows);
        })
    },
    getExpenseById: (req, res) => {
        const id = req.query.id
        client.query(`select * from expenses where id=${id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows)
        })
    },
    updateExpense: (req, res) => {
        const id = req.query.id;
        const { expense_type, expense_description, expense_amount, expense_date, status } = req.body;

        client.query(`update expenses set expense_type=$1, expense_description=$2, expense_amount=$3, expense_date=$4, status=$5 where id=$6 returning *`, [expense_type, expense_description, expense_amount, expense_date, status, id], (err, result) => {
            if (err) {
                throw err
            }
            // res.status(200).send(`User modified with ID: ${id}`)
            res.status(200).send(result.rows)
        })
    },
    deleteExpense: (req, res) => {
        const id = req.query.id;
        client.query(`delete from expenses where id=${id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(`User deleted with ID: ${id}`)
        })
    }
}