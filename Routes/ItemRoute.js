const express = require('express');
const router = express.Router();
const itemController = require('../Controllers/ItemController');


router.get('/', (req, res) => {
    res.send("Inside ItemRouter");
});

router.post('/addItem', itemController.addItem);
router.get('/getAllItem', itemController.getAllItem);
router.get('/getItemById?id', itemController.getItemById);
router.get('/updateItem', itemController.updateItem);
router.delete('/deleteItem?:id', itemController.deleteItem);

module.exports = router;


