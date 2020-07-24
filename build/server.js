"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var inversify_config_1 = __importDefault(require("./inversify.config"));
var types_1 = require("./types");
var App = (function () {
    function App() {
        var _this = this;
        this.app = express_1.default();
        this.app.use(body_parser_1.default.json());
        var controllers = [
            inversify_config_1.default.get(types_1.TYPES.EmployeesController),
            inversify_config_1.default.get(types_1.TYPES.MeetingsController),
        ];
        controllers.forEach(function (controller) {
            _this.app.use(controller.basePath, controller.router);
        });
    }
    App.prototype.listen = function () {
        this.app.listen(process.env.PORT, function () {
            console.log("Server listening http://localhost:" + process.env.PORT + "/");
        });
    };
    return App;
}());
var app = new App();
app.listen();
