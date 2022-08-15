import { Router } from 'express'

import { authenticateRoutes } from './authenticate.routes'
import { transactionsRoutes } from './transactions.routes'
import { usersRoutes } from './users.routes'

export const router = Router()

router.use('/users', usersRoutes)

router.use('/transactions', transactionsRoutes)

router.use('/auth', authenticateRoutes)
