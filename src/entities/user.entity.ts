import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Comment } from './comment.entity';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true, nullable: true })
  name: string;
  @Column({ unique: true, nullable: true })
  email: string;
  @Column({ nullable: false })
  password: string;

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];

  @BeforeInsert()
  async hashedPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}
