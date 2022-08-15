import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { v4 as uuidV4 } from 'uuid'
import { User } from "../../accounts/entities/User"

@Entity("transactions")
export class Transaction {

  @PrimaryColumn()
  id?: string

  @Column()
  description: string

  @Column()
  type: string

  @Column()
  category: string

  @Column()
  price: number

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User

  @CreateDateColumn()
  created_at: string

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }

}