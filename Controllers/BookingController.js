const client = require('../Config/Config')

module.exports = {
    addBooking: (req, res) => {

        const { room_id,customer_id,booking_date,checkin,checkout,status } = req.body;
        client.query(`INSERT INTO bookings (room_id,customer_id,booking_date,checkin,checkout,status) values($1,$2,$3,$4,$5,$6)`, [room_id,customer_id,booking_date,checkin,checkout,status], (error, results) => {
            if (error) {
                throw error
            }
            res.status(201).send(`Booking added`)
        })

    },
    getAllBooking: (req, res) => {

    },
    getBookingById: (req, res) => {

    },
    updateBooking: (req, res) => {

    },
    deleteBooking: (req, res) => {

    }
}