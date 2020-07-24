"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var types_1 = require("./types");
var employees_service_1 = __importDefault(require("./services/employees/employees.service"));
var meetings_service_1 = __importDefault(require("./services/meetings/meetings.service"));
var employees_controller_1 = __importDefault(require("./services/employees/employees.controller"));
var meetings_controller_1 = __importDefault(require("./services/meetings/meetings.controller"));
var mongoClient_1 = __importDefault(require("./util/mongoClient"));
var container = new inversify_1.Container();
container.bind(types_1.TYPES.EmployeesService).to(employees_service_1.default);
container.bind(types_1.TYPES.MeetingsService).to(meetings_service_1.default);
container.bind(types_1.TYPES.MongoClient).to(mongoClient_1.default);
container.bind(types_1.TYPES.EmployeesController).to(employees_controller_1.default);
container.bind(types_1.TYPES.MeetingsController).to(meetings_controller_1.default);
exports.default = container;
