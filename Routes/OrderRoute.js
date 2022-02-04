const express = require('express');
const router = express.Router();
const orderController = require('../Controllers/OrderController');


router.get('/', (req, res) => {
    res.send("Inside OrderRouter");
});

router.post('/addOrder', orderController.addOrder);
router.get('/getAllOrder', orderController.getAllOrder);
router.get('/getOrderById/:id', orderController.getOrderById);
router.put('/updateOrder/:id', orderController.updateOrder);
router.delete('/deleteOrder/:id', orderController.deleteOrder);

module.exports = router;