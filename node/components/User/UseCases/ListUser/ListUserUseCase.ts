import { UserRepository } from "../../Repositories/UserRepository";

class ListUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute() {
    return this.userRepository.list();
  }
}

export { ListUserUseCase }