import mysql from 'mysql';
import 'dotenv/config';
const conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_database
});

conn.connect();

export = conn;