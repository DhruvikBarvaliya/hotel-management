const { client } = require('../Config/Config')

module.exports = {
    addPayment: (req, res) => {
        const { customer_id, booking_id, type, payment_date, payment_amount, status } = req.body
        client.query("insert into payments (customer_id,booking_id,type,payment_date,payment_amount,status) values ($1,$2,$3,$4,$5,$6)", [customer_id, booking_id, type, payment_date, payment_amount, status], (error, result) => {
            if (error) {
                throw error;
            }
            res.status(201).send("Payment Added")
        })
    },
    getAllPayment: (req, res) => {
        client.query("select * from payments", (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows);
        })
    },
    getPaymentById: (req, res) => {
        const id = req.query.id
        client.query(`select * from payments where id=${id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows)
        })
    },
    updatePayment: (req, res) => {
        const id = req.query.id;
        const { customer_id, booking_id, type, payment_date, payment_amount, status } = req.body

        client.query(`update payments set customer_id=$1, booking_id=$2, type=$3, payment_date=$4, payment_amount=$5 where id=$6 returning *`, [customer_id, booking_id, type, payment_date, payment_amount, status, id], (err, result) => {
            if (err) {
                throw err
            }
            // res.status(200).send(`User modified with ID: ${id}`)
            res.status(200).send(result.rows)
        })
    },
    deletePayment: (req, res) => {
        const id = req.query.id;
        client.query(`delete from payments where id=${id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(`User deleted with ID: ${id}`)
        })
    }
}