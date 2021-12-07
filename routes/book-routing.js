const router = require('express').Router();
const { ControllerLibrary } = require('../controllers/library-controller');

router.get('/', ControllerLibrary.landingPage)
router.get('/books', ControllerLibrary.findBook)

module.exports = router