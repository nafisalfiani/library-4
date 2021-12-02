const { Book } = require('../models/book')

class ControllerLibrary{
    static landingPage(req, res) {
        res.render('landing-page')
    }

    static findBook(req, res) {
        Book.readBook((err, result) => {
            if (err) {
                res.send(err)
            } else {
                console.log(result);
                res.send(result)
            }
        })
    }
 
}

module.exports = {
    ControllerLibrary
}