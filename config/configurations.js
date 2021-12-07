const { Pool } = require('pg')
const pool = new Pool({
    user: 'nafisa_user',
    host: 'localhost',
    database: 'library-4',
    password: 'nafisa123',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
})

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

module.exports = pool