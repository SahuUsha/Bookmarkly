"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./controllers/user.controller");
const DBconnect_1 = __importDefault(require("./DBconnection/DBconnect"));
const dotenv_1 = __importDefault(require("dotenv"));
const middleware_1 = require("./middleware/middleware");
const content_controller_1 = require("./controllers/content.controller");
const shareLink_controller_1 = require("./controllers/shareLink.controller");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config({
    path: './.env'
});
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, DBconnect_1.default)()
    .then(() => {
    app.on("error", (error) => {
        console.log("Error: ", error);
    });
    app.listen(5000, () => {
        console.log(`${`server is running at port : 5000`}`);
    });
});
//.d.ts
app.post("/api/v1/signup", user_controller_1.signUpController);
app.post("/api/v1/signin", user_controller_1.signInController);
app.post("/api/v1/content", middleware_1.userMiddleWare, content_controller_1.contentController);
app.get("/api/v1/content", middleware_1.userMiddleWare, content_controller_1.getContent);
app.delete("/api/v1/content", middleware_1.userMiddleWare, content_controller_1.deleteContent);
app.post("/api/v1/brain/share", middleware_1.userMiddleWare, shareLink_controller_1.ShareLink);
app.get("/api/v1/brain/:shareLink", shareLink_controller_1.GetShareLink);
