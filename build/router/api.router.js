"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var fileNameValidator_1 = require("../validators/fileNameValidator");
var imageprocessing_1 = require("../controllers/imageprocessing");
var fileprocessing_1 = require("../controllers/fileprocessing");
var apiRouter = (0, express_1.Router)();
apiRouter.get("/api", fileNameValidator_1.validateImage, fileprocessing_1.viewImage, imageprocessing_1.convertImage);
exports.default = apiRouter;
