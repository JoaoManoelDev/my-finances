import { verify } from "jsonwebtoken"
import { injectable } from "tsyringe"
import { AppError } from "../../../../shared/errors/AppError"

interface IPayload {
  sub: string
}

injectable()
export class VerifyTokenIsValidUseCase {
  async execute(authorization: string) {

    if (!authorization) {
      throw new AppError("Expired token.", 401)
    }

    const token = authorization.replace("Bearer", "").trim()

    try {
      const { sub: user_id } = verify(token, process.env.TOKEN_SECRET) as IPayload

      return user_id
    } catch {
      throw new AppError("Invalid Token.", 401)
    }

  }
}