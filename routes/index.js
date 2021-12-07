const router = require('express').Router();
const bookRouter = require('./book-routing');
// const {ControllerLibrary} = require('../controllers/library-controller')

// router.get('/', ControllerLibrary.showAll)

router.use(bookRouter);

module.exports = router