"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var api_router_1 = __importDefault(require("./router/api.router"));
var app = (0, express_1.default)();
exports.app = app;
app.use(api_router_1.default);
var port = 3000;
app.listen(port, function () {
    console.log("Server listening on port ".concat(port));
});
