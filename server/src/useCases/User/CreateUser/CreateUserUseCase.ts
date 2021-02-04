import { IUserRepository } from '@repositories/IUserRepository';
import { IHashProvider } from '@providers/IHashProvider';
import { ICreateUserRequestDTO } from './ICreateUserDTO';
import { User } from '@entities/User';

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private hashProvider: IHashProvider,
  ) {}

  async execute({ name, email, state_id, password }: ICreateUserRequestDTO): Promise<User> {
    const verifyUser = await this.userRepository.findByEmail(email);
    
    if (verifyUser) {
      throw new Error('User already exists');
    }

    if (!state_id) {
      throw new Error('State not exists');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.userRepository.create({
      name,
      email,
      state_id,
      password: hashedPassword
    });

    return user;
  }
}