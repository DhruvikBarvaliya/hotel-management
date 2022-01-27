const express = require('express');
const router = express.Router();
const reservationController = require('../Controllers/ReservationController');


router.get('/',(req,res)=>{
    res.send("Inside ReservationRouter");
});

router.post('/addReservation' ,reservationController.addReservation);
router.get('/getAllReservation', reservationController.getAllReservation);
router.get('/getReservationById', reservationController.getReservationById);
router.get('/updateReservation', reservationController.updateReservation);
router.get('/deleteReservation', reservationController.deleteReservation);

module.exports= router;