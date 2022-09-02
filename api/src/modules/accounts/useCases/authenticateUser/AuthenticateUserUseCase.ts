import { compare } from "bcryptjs"
import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/errors/AppError"
import { IUsersRepository } from "../../repositories/IUsersRepository"
import { sign } from 'jsonwebtoken'

interface IRequest {
  email: string
  password: string
}

@injectable()
export class AuthenticateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ email, password }: IRequest) {

    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError("Incorrect email or password.", 401)
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError("Incorrect email or password.", 401)
    }

    const token = sign({ email }, process.env.TOKEN_SECRET, {
      subject: user.id,
      expiresIn: "1d"
    })

    const dataUser = {
      id: user.id,
      email: user.email,
      token
    }

    return dataUser

  }
}