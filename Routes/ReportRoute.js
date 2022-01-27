const express = require('express');
const router = express.Router();
const reportController = require('../Controllers/ReportController');


router.get('/',(req,res)=>{
    res.send("Inside ReportRouter");
});

router.post('/addReport' ,reportController.addReport);
router.get('/getAllReport', reportController.getAllReport);
router.get('/getReportById', reportController.getReportById);
router.get('/updateReport', reportController.updateReport);
router.get('/deleteReport', reportController.deleteReport);

module.exports= router;