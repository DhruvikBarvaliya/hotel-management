const express = require('express');
const router = express.Router();
const bookingRouter = require('../Routes/BookingRoute');
const customerRouter = require('../Routes/CustomerRoute')
const employeeRouter = require('../Routes/EmployeeRoute');
const expenseRouter = require('../Routes/ExpenseRoute');
const itemRouter = require('../Routes/ItemRoute');
const orderRouter = require('../Routes/OrderRoute');
const paymentRouter = require('../Routes/PaymentRoute');
const reportRouter = require('../Routes/ReportRoute');
const reservationRouter = require('../Routes/ReservationRoute');
const roomRouter = require('../Routes/RoomRoute');
const transactionRouter = require('../Routes/TransactionRoute');


router.get('/', (req, res) => {
    res.send("Inside IndexRouter");
});


router.use('/api',
    bookingRouter,
    customerRouter,
    employeeRouter,
    expenseRouter,
    itemRouter,
    orderRouter,
    paymentRouter,
    reportRouter,
    reservationRouter,
    roomRouter,
    transactionRouter
)
module.exports = router;