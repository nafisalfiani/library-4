const pool = require('./config/configurations');
const fs = require('fs');

let queryInsertbook = `
insert into "book-4" (title, genre, author) values
`;
let book = JSON.parse(fs.readFileSync('./data/book.json', 'utf-8'));

for (let i = 0; i < book.length; i++) {
    let title = book[i].title;
    let genre = book[i].genre;
    let author = book[i].author;

    queryInsertbook += `('${title}', '${genre}', '${author}')`
   
    if (i == book.length - 1) {
        queryInsertbook += ';'
    } else {
        queryInsertbook += ','
    }
}

// console.log(queryInsertbook, '>>> queryInsertBook');

pool.query(queryInsertbook, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Successfully insert book`);
    }
})