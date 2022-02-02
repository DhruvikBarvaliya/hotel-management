const {client} = require('../Config/Config')

module.exports = {
    addOrder: (req, res) => {
        const { item_id, booking_id, order_date, quentity, cost, status } = req.body
        client.query("insert into orders (item_id,booking_id,order_date,quentity,cost,status) values ($1,$2,$3,$4,$5,$6)", [item_id, booking_id, order_date, quentity, cost, status], (error, result) => {
            if (error) {
                throw error;
            }
            res.status(201).send("Order Added")
        })

    },
    getAllOrder: (req, res) => {

    },
    getOrderById: (req, res) => {

    },
    updateOrder: (req, res) => {

    },
    deleteOrder: (req, res) => {

    }
}