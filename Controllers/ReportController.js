const client = require('../Config/Config')

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

    },
    getReportById: (req, res) => {

    },
    updateReport: (req, res) => {

    },
    deleteReport: (req, res) => {

    }
}