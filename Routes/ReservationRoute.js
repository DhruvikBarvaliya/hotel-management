const express = require('express');
const router = express.Router();
const reservationController = require('../Controllers/ReservationController');


router.get('/', (req, res) => {
    res.send("Inside ReservationRouter");
});

router.post('/addReservation', reservationController.addReservation);
router.get('/getAllReservation', reservationController.getAllReservation);
router.get('/getReservationById/:id', reservationController.getReservationById);
router.put('/updateReservation/:id', reservationController.updateReservation);
router.delete('/deleteReservation/:id', reservationController.deleteReservation);

module.exports = router;