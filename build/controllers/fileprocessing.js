"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewImage = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var imageprocessing_1 = require("./imageprocessing");
var viewImage = function (req, res, next) {
    var fileName = req.query.filename;
    var imageHeight = req.query.height;
    var imageWidth = req.query.width;
    var convertedFilesPath = path_1.default.join(__dirname, "..", "..", "thumbs");
    try {
        var image = fs_1.default.readFile(path_1.default.join(convertedFilesPath, fileName, "_", imageHeight, "_", imageWidth + ".jpg"), function (err, data) {
            if (!err) {
                res.type("jpg");
                return res.send(data);
                console.log("no error");
            }
            else {
                (0, imageprocessing_1.convertImage)(req, res);
            }
        });
        // res.status(200);
        // res.type('jpg');
        // res.send(image);
    }
    catch (e) {
        return res.status(400);
    }
};
exports.viewImage = viewImage;
