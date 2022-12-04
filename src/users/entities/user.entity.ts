import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  nickName: string;

  @Column
  userName: string;

  @Column
  password: string;

  @Column
  age: string;

  @Column
  picture: string;

  @Column
  des: string;
}
