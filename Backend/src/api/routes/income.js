const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clients');

router.get('/getAllUsers', clientsController.getAllUsers)


module.exports = router;