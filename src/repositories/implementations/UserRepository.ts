import { getRepository, Repository, getConnectionManager } from 'typeorm';
import { IUserRepository } from '../IUserRepository';
import { ICreateUserRequestDTO } from '@useCases/User/CreateUser/ICreateUserDTO';
import { User } from '@entities/User';

export class UserRepository implements IUserRepository {
  async save(user: User): Promise<User> {
    return await getRepository(User).save(user);
  }

  async create({ name, email, state_id, password }: ICreateUserRequestDTO): Promise<User> {
    const userRepository = await getRepository(User)

    const user = userRepository.create({ 
      name, 
      email, 
      state: {
        id: state_id
      },
      password,
    });

    await userRepository.save(user);

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await getRepository(User).findOne({ where: { email } })

    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    return await getRepository(User).findOne({
      where: { id },
    })
  }
}