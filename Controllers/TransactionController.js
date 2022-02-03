const { client } = require('../Config/Config')

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
        client.query("select * from transactions", (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows);
        })
    },
    getTransactionById: (req, res) => {
        const id = req.query.id
        client.query(`select * from transactions where id=${id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows)
        })
    },
    updateTransaction: (req, res) => {
        const id = req.query.id;
        const { transaction_name, customer_id, employee_id, reservation_id, transaction_date } = req.body

        client.query(`update transactions set transaction_name=$1, customer_id=$2, employee_id=$3, reservation_id=$4, transaction_date=$5 where id=$7 returning *`, [transaction_name, customer_id, employee_id, reservation_id, transaction_date, id], (err, result) => {
            if (err) {
                throw err
            }
            // res.status(200).send(`User modified with ID: ${id}`)
            res.status(200).send(result.rows)
        })
    },
    deleteTransaction: (req, res) => {
        const id = req.query.id;
        client.query(`delete from transactions where id=${id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(`User deleted with ID: ${id}`)
        })
    }
}