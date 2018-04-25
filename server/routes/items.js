var express = require('express');
var router = express.Router();
const itemController = require('../controllers/item-controller')


router.get('/list', itemController.findAll)
router.get('/list/:id', itemController.findById)
router.post('/add-item', itemController.create)
router.delete('/delete/:id', itemController.deleteById)


module.exports = router;
