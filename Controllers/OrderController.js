const { client } = require('../Config/Config')

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
        client.query("select * from orders", (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows);
        })
    },
    getOrderById: (req, res) => {
        const id = req.query.id
        client.query(`select * from orders where id=${id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows)
        })
    },
    updateOrder: (req, res) => {
        const id = req.query.id;
        const { item_id, booking_id, order_date, quentity, cost, status } = req.body

        client.query(`update orders set item_id=$1, booking_id=$2, order_date=$3, quentity=$4, cost=$5, status=$6 where id=$7 returning *`, [item_id, booking_id, order_date, quentity, cost, status, id], (err, result) => {
            if (err) {
                throw err
            }
            // res.status(200).send(`User modified with ID: ${id}`)
            res.status(200).send(result.rows)
        })
    },
    deleteOrder: (req, res) => {
        const id = req.query.id;
        client.query(`delete from orders where id=${id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(`User deleted with ID: ${id}`)
        })
    }
}