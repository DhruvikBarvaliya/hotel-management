const express = require('express');
const router = express.Router();
const reportController = require('../Controllers/ReportController');


router.get('/', (req, res) => {
    res.send("Inside ReportRouter");
});

router.post('/addReport', reportController.addReport);
router.get('/getAllReport', reportController.getAllReport);
router.get('/getReportById/:id', reportController.getReportById);
router.put('/updateReport/:id', reportController.updateReport);
router.delete('/deleteReport/:id', reportController.deleteReport);

module.exports = router;