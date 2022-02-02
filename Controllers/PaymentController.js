const {client} = require('../Config/Config')

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

    },
    getPaymentById: (req, res) => {

    },
    updatePayment: (req, res) => {

    },
    deletePayment: (req, res) => {

    }
}