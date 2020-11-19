"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var migration_1 = __importDefault(require("./src/migrations/migration"));
var routes_1 = __importDefault(require("./src/Routes/routes"));
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
app.use(routes_1.default);
migration_1.default.CreateUsersTable().then(function () {
    migration_1.default.InsertAdminUserInUsersTable();
});
app.listen(3333, function () {
    console.log("Server is running in port 3333");
});
