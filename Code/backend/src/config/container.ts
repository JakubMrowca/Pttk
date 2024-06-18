import { Container } from 'inversify';
import { IUsersRepository } from '../interfaces/repositories/IUsersRepository';
import { UsersRepositories } from '../db/repositories/usersRepositories';
import 'reflect-metadata';

const myContainer = new Container();
myContainer.bind<IUsersRepository>('IUsersRepository').to(UsersRepositories);

export { myContainer };