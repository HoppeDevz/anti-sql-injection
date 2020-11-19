"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var UsersControllers_1 = __importDefault(require("../controllers/UsersControllers"));
var routes = express_1.default.Router();
routes.get("/", function (req, res) {
    res.render('index.html');
});
routes.post("/login", UsersControllers_1.default.Login, function (req, res) {
    res.status(req.body.status).send({
        auth: req.body.auth
    });
});
exports.default = routes;
