import User from "../../models/user";

export interface IUsersRepository {
    addUser(user:User): Promise<void>;
    getUsers(): Promise<User[]>
}