import { UserRepository } from '../../Repositories/UserRepository';
import { ICreateUserRequestDTO } from './ICreateUserRequestDTO';


class CreateUserUseCase {
  constructor(private userReposity: UserRepository) {}

  async execute(user: ICreateUserRequestDTO) {
    this.userReposity.create(user);
  }
}

export { CreateUserUseCase };