const { client } = require('../Config/Config')

module.exports = {
    addCustomer: (req, res) => {
        const { first_name, last_name, reservation, address, address_proof, status, contact_no, gender, id_proof, profile_img } = req.body
        client.query("insert into customers (first_name,last_name,reservation,address,address_proof,status,contact_no,gender,id_proof,profile_img) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) returning *", [first_name, last_name, reservation, address, address_proof, status, contact_no, gender, id_proof, profile_img], (error, result) => {
            if (error) {
                throw error;
            }
            res.status(201).send("Customer Added")
        })
    },
    getAllCustomer: (req, res) => {
        client.query("select * from customers", (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows);
        })
    },
    getCustomerById: (req, res) => {
        const id = req.query.id
        client.query(`select * from customers where id=${id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows)
        })
    },
    updateCustomer: (req, res) => {
        const id = req.query.id;
        const { first_name, last_name, reservation, address, address_proof, status, contact_no, gender, id_proof, profile_img } = req.body

        client.query(`update customers set first_name=$1, last_name=$2, reservation=$3, address=$4, address_proof=$5, status=$6,contact_no=$7,gender=$8,id_proof=$9,profile_img=$10 where id=$11 returning *`, [first_name, last_name, reservation, address, address_proof, status, contact_no, gender, id_proof, profile_img], (err, result) => {
            if (err) {
                throw err
            }
            // res.status(200).send(`User modified with ID: ${id}`)
            res.status(200).send(result.rows)
        })
    },
    deleteCustomer: (req, res) => {
        const id = req.query.id;
        client.query(`delete from customers where id=${id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(`User deleted with ID: ${id}`)
        })
    }
}