const { client } = require('../Config/Config')

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
        client.query("select * from items", (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows);
        })
    },
    getItemById: (req, res) => {
        const id = req.query.id
        client.query(`select * from items where id=${id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows)
        })
    },
    updateItem: (req, res) => {
        const id = req.query.id;
        const { item_type, item_name, item_cost, item_details, status } = req.body;

        client.query(`update items set item_type=$1, item_name=$2, item_cost=$3, item_details=$4, status=$5 where id=$6 returning *`, [item_type, item_name, item_cost, item_details, status, id], (err, result) => {
            if (err) {
                throw err
            }
            // res.status(200).send(`User modified with ID: ${id}`)
            res.status(200).send(result.rows)
        })
    },
    deleteItem: (req, res) => {
        const id = req.query.id;
        client.query(`delete from items where id=${id}`, (error, results) => {
            if (error) {
                throw error
            }
            res.status(201).send(`User deleted with ID: ${id}`)
        })
    }
}