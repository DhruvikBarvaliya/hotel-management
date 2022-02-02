const {client} = require('../Config/Config')

module.exports = {
    addItem: (req, res) => {
        console.log(req.body);
        const { item_type, item_name, item_cost, item_details, status } = req.body;
        client.query(`INSERT INTO items (item_type, item_name, item_cost, item_details, status)
        VALUES($1,$2,$3,$4,$5)`, [item_type, item_name, item_cost, item_details, status], (error, results) => {
            if (error) {
                throw error
            }
            res.status(201).send(`User added`)
        })
    },
    getAllItem: (req, res) => {

    },
    getItemById: (req, res) => {

    },
    updateItem: (req, res) => {

    },
    deleteItem: (req, res) => {

    }
}