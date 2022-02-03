const { client } = require('../Config/Config')

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
        client.query("select * from reservations", (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows);
        })
    },
    getReservationById: (req, res) => {
        const id = req.query.id
        client.query(`select * from reservations where id=${id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows)
        })
    },
    updateReservation: (req, res) => {
        const id = req.query.id;
        const { customer_id, room_id, reservation_date, date_in, date_out, days_range } = req.body;

        client.query(`update reservations set customer_id=$2, room_id=$1, reservation_date=$3, date_in=$4, date_out=$5, days_range=$6 where id=$7 returning *`, [customer_id, room_id, reservation_date, date_in, date_out, days_range, id], (err, result) => {
            if (err) {
                throw err
            }
            // res.status(200).send(`User modified with ID: ${id}`)
            res.status(200).send(result.rows)
        })
    },
    deleteReservation: (req, res) => {
        const id = req.query.id;
        client.query(`delete from reservations where id=${id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(`User deleted with ID: ${id}`)
        })
    }
}