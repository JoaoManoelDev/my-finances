import { container } from 'tsyringe'

import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository'
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository'

import { TransactionsRepository } from '../../modules/transactions/repositories/implementations/TransactionsRepository'
import { ITransactionsRepository } from '../../modules/transactions/repositories/ITransactionsRepository'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<ITransactionsRepository>(
  'TransactionsRepository',
  TransactionsRepository
)