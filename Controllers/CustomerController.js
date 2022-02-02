const {client} = require('../Config/Config')

module.exports = {
    addCustomer: (req, res) => {
        const {first_name,last_name,reservation,address,address_proof,status,contact_no,gender,id_proof,profile_img } = req.body
        client.query("insert into customers (first_name,last_name,reservation,address,address_proof,status,contact_no,gender,id_proof,profile_img) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)", [first_name,last_name,reservation,address,address_proof,status,contact_no,gender,id_proof,profile_img], (error, result) => {
            if (error) {
                throw error;
            }
            res.status(201).send("Customer Added")
        })
    },
    getAllCustomer: (req, res) => {

    },
    getCustomerById: (req, res) => {

    },
    updateCustomer: (req, res) => {

    },
    deleteCustomer: (req, res) => {

    }
}