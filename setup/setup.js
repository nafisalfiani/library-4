const pool = require('../config/configurations');

let createTableLibrary = `
CREATE TABLE "book-4" (
    "id" serial PRIMARY KEY,
    "title" VARCHAR (50) UNIQUE NOT NULL,
    "genre" VARCHAR (50) NOT NULL,
    "author" VARCHAR (50) NOT NULL
);
`

pool.query(createTableLibrary, (err, res) => {
    if (err) {
        console.log(er);
    } else {
        console.log(`Table book-4 created!`);
    }
})