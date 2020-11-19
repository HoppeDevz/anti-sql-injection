"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("../database/mysql"));
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.Login = function (req, res, next) {
        // 1st => PLACE HOLDERS
        var _a = req.body, username = _a.username, password = _a.password;
        if (!username || !password)
            return req.body.auth = false, req.body.status = 401, next();
        var sql = "SELECT * FROM users_accounts WHERE username = ? and password = ?";
        mysql_1.default.query(sql, 
        /* PLACEHOLDERS => */ [username, password], function (error, results, fields) {
            if (error)
                return req.body.auth = false, req.body.status = 500, next();
            if (!results)
                return req.body.auth = false, req.body.status = 401, next();
            if (results.length == 0)
                return req.body.auth = false, req.body.status = 401, next();
            return req.body.auth = true, req.body.status = 200, next();
        });
    };
    return UserController;
}());
exports.default = new UserController();
