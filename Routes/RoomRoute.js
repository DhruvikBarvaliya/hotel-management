const express = require('express');
const router = express.Router();
const roomController = require('../Controllers/RoomController');


router.get('/', (req, res) => {
    res.send("Inside RoomRouter");
});

router.post('/addRoom', roomController.addRoom);
router.get('/getAllRoom', roomController.getAllRoom);
router.get('/getRoomById/:id', roomController.getRoomById);
router.put('/updateRoom/:id', roomController.updateRoom);
router.delete('/deleteRoom/:id', roomController.deleteRoom);

module.exports = router;