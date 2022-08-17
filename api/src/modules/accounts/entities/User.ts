import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'
import { Transaction } from '../../transactions/entities/Transaction'

@Entity('users')
export class User {

  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @OneToMany(() => Transaction, transaction => transaction.user)
  transaction: Transaction[]

  @CreateDateColumn()
  created_at: string

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}