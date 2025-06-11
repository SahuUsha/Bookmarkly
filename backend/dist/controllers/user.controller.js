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
exports.signInController = exports.signUpController = void 0;
const ApiError_1 = require("../utils/ApiError");
const user_model_1 = require("../models/user.model");
const apiresponse_1 = __importDefault(require("../utils/apiresponse"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_PASSWORD = "!23456";
const signUpController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("sign up controller : ", req.body);
    const { username, password } = req.body;
    try {
        if ([username, password].some((field) => (field === null || field === void 0 ? void 0 : field.trim()) === "")) {
            throw new ApiError_1.ApiError(400, "All field are required");
        }
        const existedUser = yield user_model_1.User.findOne({
            username: username
        });
        if (existedUser) {
            throw new ApiError_1.ApiError(409, "User already exist");
        }
        const user = yield user_model_1.User.create({
            username: username,
            password
        });
        const createdUser = yield user_model_1.User.findById(user._id).select("-password");
        if (!createdUser) {
            throw new ApiError_1.ApiError(500, "some this wrong to creating user");
        }
        res.status(201).json(new apiresponse_1.default(200, createdUser, "User Signup successfully"));
    }
    catch (err) {
        console.error("⛔ signup failed:", err);
        // forward to your error‐handler middleware
        return next(new ApiError_1.ApiError(err.statusCode || 500, err.message || "Unexpected error during signup"));
    }
});
exports.signUpController = signUpController;
const signInController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("sign in controller : ", req.body);
    const { username, password } = req.body;
    try {
        if ([username, password].some((field) => (field === null || field === void 0 ? void 0 : field.trim()) === "")) {
            throw new ApiError_1.ApiError(400, "All field are required");
        }
        const user = yield user_model_1.User.findOne({
            username: username
        });
        if (!user) {
            throw new ApiError_1.ApiError(404, "user is not found");
        }
        const token = jsonwebtoken_1.default.sign({
            id: user._id
        }, JWT_PASSWORD);
        // const isPasswordValid = await user.isPasswordCorrect(password)
        // if(!isPasswordValid){
        //     throw new ApiError(401 , "Password is incorrect")
        // }
        console.log("token : ", token);
        res.status(200).json(new apiresponse_1.default(200, token, "signin successfully"));
    }
    catch (err) {
        console.error("⛔ signup failed:", err);
        // forward to your error‐handler middleware
        return next(new ApiError_1.ApiError(err.statusCode || 500, err.message || "Unexpected error during signup"));
    }
});
exports.signInController = signInController;
const signOutController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
});
