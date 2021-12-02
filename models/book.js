const pool = require('../config/configurations');

// class Book{
//     constructor(id, title, genre, author) {
//         this.id = id,
//         this.title = title,
//         this.genre = genre,
//         this.author = author
//     }

class Book {
    constructor(object) {
        this.id = object.id,
        this.title = object.title,
        this.genre = object.genre,
        this.author = object.author
    }

    static readBook(cb) {
        let queryFindBook = `
        select * from "book-4" order by id
        `;

        pool.query(queryFindBook, (err, result) => {
            if (err) {
                cb(err)
            } else {
                // cb(null, result.rows)

                // let bookInstance = [];
                // result.rows.forEach(element => {
                //     bookInstance.push(new Book(element.id, element.title, element.genre, element.author));
                // });

                // cb(null, bookInstance)

                // const book = [];
                //  for (let i = 0; i < result.rows.length; i++) {
                //      let book_id = result.rows[i].book_id;
                //      let title = result.rows[i].title;
                //      let genre = result.rows[i].genre;
                //      let author = result.rows[i].author;

                //      book.push(new Book(book_id, title, genre, author ));
                //  }
                //  cb(null, book);

                // const instanceData = result.rows.map( (el) => {
                //     return new Book(el.id, el.title, el.genre, el.author)
                //     // return new Book(el)
                // })
                // cb(null, instanceData);

            const instanceData = result.rows.map( el =>  new Book(el));
            cb(null, instanceData);
            }
        })

    }



}

module.exports = {
    Book
}