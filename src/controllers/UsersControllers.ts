import { Request, Response, NextFunction } from 'express';
import db from '../database/mysql';
import { MysqlError, FieldInfo } from 'mysql';

class UserController {
    public Login(req: Request, res: Response, next: NextFunction) {
        // 1st => PLACE HOLDERS
        const { username, password } = req.body;
        if (!username || !password) return req.body.auth = false, req.body.status = 401, next();


        const sql = "SELECT * FROM users_accounts WHERE username = ? and password = ?"
        db.query(sql, 
        /* PLACEHOLDERS => */ [username, password],
        (error: MysqlError | null, results?: any[], fields?: FieldInfo[]) => {
            if (error) return req.body.auth = false, req.body.status = 500, next();
            if (!results) return req.body.auth = false, req.body.status = 401, next();
            if (results.length == 0) return req.body.auth = false, req.body.status = 401, next();
            return req.body.auth = true, req.body.status = 200, next();
        });
    }
}


export default new UserController();