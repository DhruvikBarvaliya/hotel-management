const { client } = require('../Config/Config')

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
        client.query("select * from employees", (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows);
        })
    },
    getEmployeeById: (req, res) => {
        const id = req.query.id
        client.query(`select * from employees where id=${id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result.rows)
        })
    },
    updateEmployee: (req, res) => {
        const id = req.query.id;
        const { first_name, last_name, employee_type, employee_description, job_department, address, contact_address, user_name, password } = req.body

        client.query(`update employees set first_name=$1, last_name=$2, employee_type=$3, employee_description=$4, job_department=$5, address=$6,contact_address=$7,user_name=$8,password=$9 where id=$10 returning *`, [first_name, last_name, employee_type, employee_description, job_department, address, contact_address, user_name, password, id], (err, result) => {
            if (err) {
                throw err
            }
            // res.status(200).send(`User modified with ID: ${id}`)
            res.status(200).send(result.rows)
        })
    },
    deleteEmployee: (req, res) => {
        const id = req.query.id;
        client.query(`delete from employees where id=${id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(`User deleted with ID: ${id}`)
        })
    }
}