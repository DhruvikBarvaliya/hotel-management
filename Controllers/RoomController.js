const client = require('../Config/Config')

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

    },
    getRoomById: (req, res) => {

    },
    updateRoom: (req, res) => {

    },
    deleteRoom: (req, res) => {

    }
}