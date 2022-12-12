"use strict";
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
exports.convertImage = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var sharp = require('sharp');
var convertedFilesPath = path_1.default.join(__dirname, "..", "..", "thumbs");
var filesPath = path_1.default.join(__dirname, "..", "..", "images");
function resize(filename, filepath, width, height) {
    return __awaiter(this, void 0, void 0, function () {
        var sharpObj, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(path_1.default.join(filepath, filename + "_" + height.toString() + "_" + width.toString() + ".jpg"));
                    sharpObj = sharp(path_1.default.join(filesPath, filename + ".jpg"))
                        .resize({ height: height, width: width })
                        .toFile(path_1.default.join(filepath, filename + "_" + height.toString() + "_" + width.toString() + ".jpg"))
                        .then(function (info) { console.log(info); })
                        .catch(function (err) { console.log(err); });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, sharpObj];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    return [2 /*return*/, err_1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function convert(res, fileName, imageHeight, imageWidth) {
    return __awaiter(this, void 0, void 0, function () {
        var image, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, resize(fileName, convertedFilesPath, imageWidth, imageHeight)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, fs_1.default.readFile(path_1.default.join(convertedFilesPath, fileName + "_" + imageHeight.toString() + "_" + imageWidth.toString() + ".jpg"), function (err, data) {
                            res.type("jpg");
                            return res.send(data);
                        })];
                case 3:
                    image = _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    err_2 = _a.sent();
                    return [2 /*return*/, res.status(406).send(err_2)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
var convertImage = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var fileName, imageHeight, imageWidth, convertedImage, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fileName = req.query.filename;
                imageHeight = req.query.height;
                imageWidth = req.query.width;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, convert(res, fileName, Number(imageHeight), Number(imageWidth))];
            case 2:
                convertedImage = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                res.status(404);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.convertImage = convertImage;
exports.default = resize;
