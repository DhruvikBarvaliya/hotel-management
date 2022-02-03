const { client } = require('../Config/Config')

module.exports = {
    addRoom: (req, res) => {
        const { room_no, room_type, room_sample, description, cost, status } = req.body
        client.query("insert into rooms (room_no,room_type,room_sample,description,cost,status) values ($1,$2,$3,$4,$5,$6)", [room_no, room_type, room_sample, description, cost, status], (error, result) => {
            if (error) {
                return error;
            }
            res.status(201).send({ message: "Room Created" })
        })
    },
    getAllRoom: (req, res) => {
        client.query("select * from rooms", (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows);
        })
    },
    getRoomById: (req, res) => {
        const id = req.query.id
        client.query(`select * from rooms where id=${id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows)
        })
    },
    updateRoom: (req, res) => {
        const id = req.query.id;
        const { room_no, room_type, room_sample, description, cost, status } = req.body

        client.query(`update rooms set room_no=$1, room_type=$2, room_sample=$3, description=$4, cost=$5, status=$6 where id=$7 returning *`, [room_no, room_type, room_sample, description, cost, status, id], (err, result) => {
            if (err) {
                throw err
            }
            // res.status(200).send(`User modified with ID: ${id}`)
            res.status(200).send(result.rows)
        })
    },
    deleteRoom: (req, res) => {
        const id = req.query.id;
        client.query(`delete from rooms where id=${id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(`User deleted with ID: ${id}`)
        })
    }
}