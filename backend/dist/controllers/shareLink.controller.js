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
exports.GetShareLink = exports.ShareLink = void 0;
const ApiError_1 = require("../utils/ApiError");
const link_model_1 = require("../models/link.model");
const apiresponse_1 = __importDefault(require("../utils/apiresponse"));
const random_1 = require("../utils/random");
const content_model_1 = require("../models/content.model");
const user_model_1 = require("../models/user.model");
const ShareLink = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const share = req.body.share;
    try {
        console.log("share link", share);
        if (!share) {
            yield link_model_1.Link.deleteOne({
                // @ts-ignore
                userId: req.userId
            });
            throw new ApiError_1.ApiError(400, " share link is required");
        }
        const existingLink = yield link_model_1.Link.findOne({
            // @ts-ignore
            userId: req.userId
        });
        if (existingLink) {
            res.status(202).json(new apiresponse_1.default(202, { hash: existingLink.hash }, "link is already exist"));
            return;
        }
        const hash = (0, random_1.random)(10);
        const sharelink = yield link_model_1.Link.create({
            hash: hash,
            // @ts-ignore
            userId: req.userId
        });
        console.log("share link content", sharelink);
        if (!sharelink) {
            throw new ApiError_1.ApiError(500, " error on creating share link");
        }
        res.status(200).json(new apiresponse_1.default(200, sharelink, "/share/" + hash + ": share link created successfully"));
    }
    catch (error) {
        throw new ApiError_1.ApiError(500, "error on creating share link");
    }
});
exports.ShareLink = ShareLink;
const GetShareLink = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const hash = req.params.shareLink;
    try {
        const link = yield link_model_1.Link.findOne({
            hash
        });
        if (!link) {
            throw new ApiError_1.ApiError(404, "Link is required");
        }
        const content = yield content_model_1.Content.find({
            userId: link.userId
        });
        console.log("link : ", link);
        console.log("userId : ", link.userId);
        const user = yield user_model_1.User.findOne({
            _id: link.userId
        });
        if (!user) {
            throw new ApiError_1.ApiError(404, "user not found on shering link");
        }
        if (!content) {
            throw new ApiError_1.ApiError(404, "content not found on shering link");
        }
        res.status(200).json(new apiresponse_1.default(200, { username: user.username, content: content }, "user found"));
    }
    catch (error) {
        new ApiError_1.ApiError(500, { error } + ": error on getting share link");
    }
});
exports.GetShareLink = GetShareLink;
