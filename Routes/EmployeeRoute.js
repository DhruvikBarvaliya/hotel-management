const express = require('express');
const router = express.Router();
const employeeController = require('../Controllers/EmployeeController');


router.get('/', (req, res) => {
    res.send("Inside EmployeeRouter");
});

router.post('/addEmployee', employeeController.addEmployee);
router.get('/getAllEmployee', employeeController.getAllEmployee);
router.get('/getEmployeeById?:id', employeeController.getEmployeeById);
router.put('/updateEmployee?:id', employeeController.updateEmployee);
router.delete('/deleteEmployee?:id', employeeController.deleteEmployee);

module.exports = router;