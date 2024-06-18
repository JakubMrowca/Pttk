import { myContainer } from "../../config/container";
import { IUsersRepository } from "../../interfaces/repositories/IUsersRepository";
import User from "../../models/user";
import { CreateUserCommand } from "../../utils/commands/createUserCommand";
class CreateUserCommandHandler {
    private usersRepository: IUsersRepository;

    constructor() {
      this.usersRepository = myContainer.get<IUsersRepository>('IUsersRepository');
    }

    async handle(command: CreateUserCommand): Promise<void>{
        const user = new User();
        user.firstName = command.firstName;
        user.lastName = command.lastName;
        user.email = command.email;

        this.usersRepository.addUser(user);
    }
}

export default CreateUserCommandHandler;