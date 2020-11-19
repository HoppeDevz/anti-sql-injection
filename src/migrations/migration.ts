import db from '../database/mysql';
import { MysqlError, FieldInfo } from 'mysql';

export default {
    CreateUsersTable: () => {
        return new Promise((resolve, reject) => {
            db.query(/*sql*/`
                CREATE TABLE IF NOT EXISTS users_accounts (
                    id INT(11) NOT NULL AUTO_INCREMENT,
                    username varchar(255) NOT NULL,
                    password varchar(255) NOT NULL,
                    PRIMARY KEY (id)
                )
            `)

            setTimeout(() => resolve(), 500);
        });
    },

    InsertAdminUserInUsersTable: () => {
        db.query(`SELECT * FROM users_accounts WHERE username = 'admin';`, (error?: MysqlError, results?: any[], fields?: FieldInfo[]) => {
            if (!results) return;
            if (results.length == 0) {
                db.query(/*sql*/`
                    INSERT INTO users_accounts (username, password) VALUES ('admin', 'admin');
                `)
            }
        });
    }
}