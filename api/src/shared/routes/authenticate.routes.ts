import { Router } from "express"
import { AuthenticateUserUseController } from "../../modules/accounts/useCases/authenticateUser/AuthenticateUserController"
import { VerifyTokenIsValidController } from "../../modules/accounts/useCases/verifyTokenIsValid/VerifyTokenIsValidController"

export const authenticateRoutes = Router()

const authenticateUserUseController = new AuthenticateUserUseController()
const verifyTokenIsValidController = new VerifyTokenIsValidController()

authenticateRoutes.post("/", authenticateUserUseController.handle)

authenticateRoutes.post("/validatetoken", verifyTokenIsValidController.handle)