import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateUserUseCase } from './CreateUserUseCase'


export class CreateUserController {
  async hamdle(request: Request, response: Response): Promise<Response> {

    const { name, email, password, passwordConfirm } = request.body

    const createUserUseCase = container.resolve(CreateUserUseCase)

    await createUserUseCase.execute({ name, email, password, passwordConfirm })

    return response.status(201).json({ message: 'User created successfully.' })

  }
}