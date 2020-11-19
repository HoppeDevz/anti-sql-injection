import mysql from 'mysql';

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

db.query(/*sql*/`
    CREATE DATABASE IF NOT EXISTS AntiSQLInjection;
`);

export default mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "AntiSQLInjection"
})