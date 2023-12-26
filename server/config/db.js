const mysql = require('mysql')

const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "Abc12345",
database:"blog_posts" 
})

module.exports = db;