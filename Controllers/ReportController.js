const { client } = require('../Config/Config')

module.exports = {
    addReport: (req, res) => {
        const { transaction_id, name, type } = req.body
        client.query("insert into reports (transaction_id,name,type) values($1,$2,$3)", [transaction_id, name, type], (error, result) => {
            if (error) {
                throw error;
            }
            res.status(201).send("Report Added")
        })

    },
    getAllReport: (req, res) => {
        client.query("select * from reports", (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows);
        })
    },
    getReportById: (req, res) => {
        const id = req.query.id
        client.query(`select * from reports where id=${id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows)
        })
    },
    updateReport: (req, res) => {
        const id = req.query.id;
        const { transaction_id, name, type } = req.body

        client.query(`update reports set transaction_id=$1, name=$2, type=$3 where id=$4 returning *`, [transaction_id, name, type, id], (err, result) => {
            if (err) {
                throw err
            }
            // res.status(200).send(`User modified with ID: ${id}`)
            res.status(200).send(result.rows)
        })
    },
    deleteReport: (req, res) => {
        const id = req.query.id;
        client.query(`delete from reports where id=${id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(`User deleted with ID: ${id}`)
        })
    }
}