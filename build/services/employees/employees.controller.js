"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var controller_1 = __importDefault(require("../../controller"));
var types_1 = require("../../types");
var validateEndpoint_1 = __importDefault(require("../../util/validateEndpoint"));
var inversify_1 = require("inversify");
var EmployeesController = (function (_super) {
    __extends(EmployeesController, _super);
    function EmployeesController(employeesService) {
        var _this = _super.call(this) || this;
        _this.basePath = '/employees';
        _this.employeesService = employeesService;
        _this.initializeRoutes();
        return _this;
    }
    EmployeesController.prototype.initializeRoutes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.router.get('/', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    var employees;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, this.employeesService.getEmployees()];
                            case 1:
                                employees = _a.sent();
                                res.send(employees);
                                return [2];
                        }
                    });
                }); });
                this.router.get('/:id', [express_validator_1.param('id').not().isEmpty()], function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    var errors, employees;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                errors = validateEndpoint_1.default(req);
                                if (errors.length) {
                                    return [2, res.status(400).json({ errors: errors })];
                                }
                                return [4, this.employeesService.getEmployeeById(req.params.id)];
                            case 1:
                                employees = _a.sent();
                                res.send(employees);
                                return [2];
                        }
                    });
                }); });
                this.router.post('/', [express_validator_1.body('email').isEmail(), express_validator_1.body('name.firstName').not().isEmpty(), express_validator_1.body('name.lastName').not().isEmpty()], function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    var errors, createdEmployee;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                errors = validateEndpoint_1.default(req);
                                if (errors.length) {
                                    return [2, res.status(400).json({ errors: errors })];
                                }
                                return [4, this.employeesService.createEmployee(req.body)];
                            case 1:
                                createdEmployee = _a.sent();
                                res.status(201).send(this.basePath + "/" + createdEmployee.id);
                                return [2];
                        }
                    });
                }); });
                this.router.put('/:id', [
                    express_validator_1.body('email').isEmail(),
                    express_validator_1.body('name.firstName').not().isEmpty(),
                    express_validator_1.body('name.lastName').not().isEmpty(),
                    express_validator_1.param('id').not().isEmpty(),
                ], function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    var errors, employee, createdEmployee;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                errors = validateEndpoint_1.default(req);
                                if (errors.length) {
                                    return [2, res.status(400).json({ errors: errors })];
                                }
                                employee = __assign(__assign({}, req.body), { id: req.params.id });
                                return [4, this.employeesService.updateEmployee(employee)];
                            case 1:
                                createdEmployee = _a.sent();
                                if (createdEmployee.previouslyExisted) {
                                    return [2, res.status(200).send(this.basePath + "/" + createdEmployee.id)];
                                }
                                res.status(201).send(this.basePath + "/" + createdEmployee.id);
                                return [2];
                        }
                    });
                }); });
                this.router.delete('/:id', [express_validator_1.param('id').not().isEmpty()], function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    var errors, deleteResult;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                errors = validateEndpoint_1.default(req);
                                if (errors.length) {
                                    return [2, res.status(400).json({ errors: errors })];
                                }
                                return [4, this.employeesService.deleteEmployee(req.params.id)];
                            case 1:
                                deleteResult = _a.sent();
                                if (deleteResult) {
                                    return [2, res.status(200).send()];
                                }
                                res.status(404).send("Could not find employee with id " + req.params.id);
                                return [2];
                        }
                    });
                }); });
                return [2];
            });
        });
    };
    EmployeesController = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.EmployeesService)),
        __metadata("design:paramtypes", [Object])
    ], EmployeesController);
    return EmployeesController;
}(controller_1.default));
exports.default = EmployeesController;
