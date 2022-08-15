import { Router } from "express"
import { AuthenticateUserUseController } from "../../modules/accounts/useCases/authenticateUser/AuthenticateUserController"

export const authenticateRoutes = Router()

const authenticateUserUseController = new AuthenticateUserUseController()

authenticateRoutes.post("/", authenticateUserUseController.handle)

