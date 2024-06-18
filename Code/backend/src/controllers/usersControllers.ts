import { Request, Response } from 'express';
import { CreateUserCommand } from '../utils/commands/createUserCommand';
import CreateUserCommandHandler from '../services/commandHandlers/createUserCommandHandler';
import { myContainer } from '../config/container';
import { IUsersRepository } from '../interfaces/repositories/IUsersRepository';

export const addUser = (req: Request, res: Response) => {
    const command = req.body as CreateUserCommand;

    if (!command.firstName) 
        return res.status(400).json({ error: 'First Name is required' });
    
    if (!command.lastName) 
        return res.status(400).json({ error: 'Last name is required' });
    
    if (!command.email)
        return res.status(400).json({ error: 'Email is required' });

    const handler = new CreateUserCommandHandler();
    handler.handle(command).then(() => {
        return res.status(201).json({ message: 'User added successfully' });
    }).catch((error) => {});
};

// Get users endpoint
export const getUsers = (req: Request, res: Response) => {
    const repository = myContainer.get<IUsersRepository>('IUsersRepository');
    console.log("Repository created");
    repository.getUsers().then((users) => {
        return res.status(200).json(users);
    }).catch((error) => {
        console.log(error);
        return res.status(500).json({ error: 'An error occurred while retrieving users' });
    });
};