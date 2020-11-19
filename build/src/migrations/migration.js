"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("../database/mysql"));
exports.default = {
    CreateUsersTable: function () {
        return new Promise(function (resolve, reject) {
            mysql_1.default.query(/*sql*/ "\n                CREATE TABLE IF NOT EXISTS users_accounts (\n                    id INT(11) NOT NULL AUTO_INCREMENT,\n                    username varchar(255) NOT NULL,\n                    password varchar(255) NOT NULL,\n                    PRIMARY KEY (id)\n                )\n            ");
            setTimeout(function () { return resolve(); }, 500);
        });
    },
    InsertAdminUserInUsersTable: function () {
        mysql_1.default.query("SELECT * FROM users_accounts WHERE username = 'admin';", function (error, results, fields) {
            if (!results)
                return;
            if (results.length == 0) {
                mysql_1.default.query(/*sql*/ "\n                    INSERT INTO users_accounts (username, password) VALUES ('admin', 'admin');\n                ");
            }
        });
    }
};
