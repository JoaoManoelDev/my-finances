import { Request, Response } from "express"
import { container } from "tsyringe"
import { VerifyTokenIsValidUseCase } from "./VerifyTokenIsValidUseCase"


export class VerifyTokenIsValidController {
  async handle(request: Request, response: Response): Promise<Response> {

    const { authorization } = request.headers

    const verifyTokenIsValidUseCase = container.resolve(VerifyTokenIsValidUseCase)

    const tokenIsValid = await verifyTokenIsValidUseCase.execute(authorization)

    return response.status(200).json(tokenIsValid)

  }
}