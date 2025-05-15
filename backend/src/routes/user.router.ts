import { Router } from "express"
import { signUpController } from "../controllers/user.controller"

const router = Router()

router.route("/signin").post(signUpController)