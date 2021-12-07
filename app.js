const express = require('express');
const port = 3000;
const app = express();
const router = require('./routes/index')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})