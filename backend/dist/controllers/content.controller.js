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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContent = exports.getContent = exports.contentController = void 0;
const content_model_1 = require("../models/content.model");
const apiresponse_1 = __importDefault(require("../utils/apiresponse"));
const ApiError_1 = require("../utils/ApiError");
const contentController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const link = req.body.link;
    const type = req.body.type;
    const title = req.body.title;
    try {
        const content = yield content_model_1.Content.create({
            link,
            type,
            title,
            // @ts-ignore
            userId: req.userId,
            tags: []
        });
        res.status(200).json(new apiresponse_1.default(200, "content added successfully"));
    }
    catch (error) {
        console.error("Error creating content:", error);
        throw new ApiError_1.ApiError(500, "error on creating the content");
    }
});
exports.contentController = contentController;
const getContent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    const userId = req.userId;
    const content = yield content_model_1.Content.find({
        userId: userId
    }).populate("userId", "username");
    if (!content) {
        throw new ApiError_1.ApiError(404, "No content of user");
    }
    res.status(200).json(new apiresponse_1.default(200, content, "Content get successfully"));
});
exports.getContent = getContent;
const deleteContent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const contentId = req.body.contentId;
    try {
        const deleteContent = yield content_model_1.Content.deleteMany({
            _id: contentId,
            // @ts-ignore
            userId: req.userId
        });
        console.log("delete content", deleteContent);
        if (!deleteContent) {
            throw new ApiError_1.ApiError(404, "No content of user");
        }
        res.status(200).json(new apiresponse_1.default(200, deleteContent, "content deleted successfully"));
    }
    catch (error) {
        throw new ApiError_1.ApiError(500, "error on deleting the content");
    }
});
exports.deleteContent = deleteContent;
