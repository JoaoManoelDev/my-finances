import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
  sub: string
}

export async function ensureAuthenticateUser(
  request: Request,
  response: Response,
  next: NextFunction
) {

  const { authorization } = request.headers

  console.log(authorization)

  if (!authorization) {
    return response.status(401).json({
      message: "Token missing."
    })
  }

  const token = authorization.replace("Bearer", "").trim()

  try {
    const { sub: user_id } = verify(token, process.env.TOKEN_SECRET) as IPayload

    request.user = {
      id: user_id
    }

    return next()

  } catch (error) {
    return response.status(401).json({
      message: "Invalid Token."
    })
  }

}