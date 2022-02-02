const { json } = require('express/lib/response');
const { client } = require('../Config/Config')

module.exports = {
    addBooking: (req, res) => {

        const { room_id, customer_id, booking_date, checkin, checkout, status } = req.body;
        client.query(`INSERT INTO bookings (room_id,customer_id,booking_date,checkin,checkout,status) values($1,$2,$3,$4,$5,$6) returning *`, [room_id, customer_id, booking_date, checkin, checkout, status], (error, result) => {
            if (error) {
                throw error
            }
            // res.status(201).send(`User added`)
            res.status(201).send(result.rows)
        })

    },
    getAllBooking: (req, res) => {
        client.query("select * from bookings", (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows)
        })
    },
    getBookingById: (req, res) => {
        const id = req.query.id
        client.query(`select * from bookings where id=${id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows)
        })

    },
    updateBooking: (req, res) => {
        const id = req.query.id;
        const { room_id, customer_id, booking_date, checkin, checkout, status } = req.body;

        client.query(`update bookings set room_id=$1, customer_id=$2, booking_date=$3, checkin=$4, checkout=$5, status=$6 where id=$7 returning *`, [room_id, customer_id, booking_date, checkin, checkout, status, id], (err, result) => {
            if (err) {
                throw err
            }
            // res.status(200).send(`User modified with ID: ${id}`)
            res.status(200).send(result.rows)
        })
    },
    deleteBooking: (req, res) => {
        const id = req.query.id;
        client.query(`delete from bookings where id=${id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(`User deleted with ID: ${id}`)
        })
    }
}