import mysql from 'mysql';
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "genius557",
    database: "testapi2"
});

conn.connect();

export = conn;