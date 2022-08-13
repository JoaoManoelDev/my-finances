import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/errors/AppError'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { hash } from 'bcryptjs'

interface IRequest {
  name: string
  email: string
  password: string
  passwordConfirm: string
}

@injectable()
export class CreateUserUseCase {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }

  async execute({
    email,
    password,
    passwordConfirm,
    name
  }: IRequest) {

    const userAlreadExists = await this.usersRepository.findByEmail(email)

    if (userAlreadExists) {
      throw new AppError('User already exists.')
    }

    if (passwordConfirm !== password) {
      throw new AppError('Passwords must match.')
    }

    const salt = 8
    const passwordHash = await hash(password, salt)

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash
    })
  }
}
