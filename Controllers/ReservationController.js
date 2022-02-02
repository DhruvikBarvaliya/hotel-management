const {client} = require('../Config/Config')

module.exports = {
    addReservation: (req, res) => {
        const { customer_id, room_id, reservation_date, date_in, date_out, days_range } = req.body;

        client.query("insert into reservations (customer_id,room_id,reservation_date,date_in,date_out,days_range) values ($1,$2,$3,$4,$5,$6)", [customer_id, room_id, reservation_date, date_in, date_out, days_range], (error, result) => {
            if (error) {
                throw error;
            }
            res.status(201).send("Reservation Added")
        })

    },
    getAllReservation: (req, res) => {

    },
    getReservationById: (req, res) => {

    },
    updateReservation: (req, res) => {

    },
    deleteReservation: (req, res) => {

    }
}