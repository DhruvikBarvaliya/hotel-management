const express = require('express');
const router = express.Router();
const roomController = require('../Controllers/RoomController');


router.get('/',(req,res)=>{
    res.send("Inside RoomRouter");
});

router.post('/addRoom' ,roomController.addRoom);
router.get('/getAllRoom', roomController.getAllRoom);
router.get('/getRoomById', roomController.getRoomById);
router.get('/updateRoom', roomController.updateRoom);
router.get('/deleteRoom', roomController.deleteRoom);

module.exports= router;