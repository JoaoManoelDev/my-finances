import { Repository } from 'typeorm'
import { AppDataSource } from '../../../../database/data-source'
import { ICreateUsersDTO } from '../../dtos/ICreateUserDTO'
import { User } from '../../entities/User'
import { IUsersRepository } from '../IUsersRepository'

export class UsersRepository implements IUsersRepository {

  private repository: Repository<User>

  constructor() {
    this.repository = AppDataSource.getRepository(User)
  }
  async create({
    email,
    name,
    password,
    id
  }: ICreateUsersDTO): Promise<void> {
    const user = this.repository.create({
      email,
      id,
      name,
      password
    })

    await this.repository.save(user)
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOneBy({ email })

    return user
  }
}