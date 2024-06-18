import { injectable } from 'inversify';
import { IUsersRepository } from '../../interfaces/repositories/IUsersRepository';
import User from '../../models/user';
import 'reflect-metadata';

@injectable()
export class UsersRepositories implements IUsersRepository {
  async addUser(user: User): Promise<void> {
    const newUser = await User.create(user);
  }

  async getUsers(): Promise<User[]> {
    console.log('Getting users from the database');
    const result = User.findAll();
    console.log('Users retrieved');
    return result;
  }
}