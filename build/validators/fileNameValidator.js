"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateImage = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var validateImage = function (req, res, next) {
    var fileName = req.query.filename;
    var imageHeight = req.query.height;
    var imageWidth = req.query.width;
    var filePath = path_1.default.join(__dirname, "..", "..", "images");
    if (Object.keys(req.query).length === 0) {
        return res.status(200).send("this is the home directory of the api");
    }
    try {
        var image = fs_1.default.readFile(path_1.default.join(filePath, fileName + ".jpg"), function (err, data) {
            if (!err) {
                if (isNaN(Number(imageHeight))) {
                    console.log("this is not a number");
                    console.log(typeof Number(imageHeight));
                    return res.status(406).send("please enter a valid number \"".concat(imageHeight, "\" is not a number"));
                }
                if (isNaN(Number(imageWidth))) {
                    console.log("this is not a number");
                    console.log(typeof Number(imageWidth));
                    return res.status(406).send("please enter a valid number \"".concat(imageWidth, "\" is not a number"));
                }
                if (Number(imageHeight) > 0 && Number(imageWidth) > 0) {
                    next();
                    console.log("no error");
                }
                else {
                    return res.status(406).send("please enter  a positive value");
                }
            }
            else {
                return res.status(404).send("file not found");
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
exports.validateImage = validateImage;
