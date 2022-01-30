const express = require('express');
const router = express.Router();
const bookingRouter = require('../Controllers/BookingController');

router.get('/',(req,res)=>{
    res.send("Inside BookingRouter");
});

router.post('/addBooking' ,bookingRouter.addBooking);
router.get('/getAllBooking', bookingRouter.getAllBooking);
router.get('/getBookingById?id', bookingRouter.getBookingById);
router.get('/updateBooking', bookingRouter.updateBooking);
router.get('/deleteBooking', bookingRouter.deleteBooking);


module.exports= router;