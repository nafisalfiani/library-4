const router = require('express').Router();
const {ControllerLibrary} = require('../controllers/library-controller')

router.get('/', ControllerLibrary.showAll)

module.exports = router