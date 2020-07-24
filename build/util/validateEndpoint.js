"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
function requestValidationFailures(req) {
    var errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return errors.array();
    }
    return [];
}
exports.default = requestValidationFailures;
