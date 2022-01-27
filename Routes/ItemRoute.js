const express = require('express');
const router = express.Router();
const itemController = require('../Controllers/ItemController');


router.get('/',(req,res)=>{
    res.send("Inside ItemRouter");
});

router.post('/addItem' ,itemController.addItem);
router.get('/getAllItem', itemController.getAllItem);
router.get('/getItemById', itemController.getItemById);
router.get('/updateItem', itemController.updateItem);
router.get('/deleteItem', itemController.deleteItem);

module.exports= router;