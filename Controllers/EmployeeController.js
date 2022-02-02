const {client} = require('../Config/Config')

module.exports = {
    addEmployee: (req, res) => {
        const { first_name, last_name, employee_type, employee_description, job_department, address, contact_address, user_name, password } = req.body

        client.query("insert into employees (first_name,last_name,employee_type,employee_description,job_department,address,contact_address,user_name,password) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)", [first_name, last_name, employee_type, employee_description, job_department, address, contact_address, user_name, password], (error, result) => {
            if (error) {
                throw error;
            }
            res.status(201).send("Employee Added")
        })

    },
    getAllEmployee: (req, res) => {

    },
    getEmployeeById: (req, res) => {

    },
    updateEmployee: (req, res) => {

    },
    deleteEmployee: (req, res) => {

    }
}