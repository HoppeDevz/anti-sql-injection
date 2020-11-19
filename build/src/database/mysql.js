"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var db = mysql_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});
db.query(/*sql*/ "\n    CREATE DATABASE IF NOT EXISTS AntiSQLInjection;\n");
exports.default = mysql_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "AntiSQLInjection"
});
