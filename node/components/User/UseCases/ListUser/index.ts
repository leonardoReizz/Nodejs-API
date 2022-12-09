import { UserRepository } from "../../Repositories/UserRepository";
import { ListUserController } from "./ListUserController";
import { ListUserUseCase } from "./ListUserUseCase";



const userRepository = new UserRepository();
const listUserUseCase = new ListUserUseCase(userRepository);
const listUserContoller = new ListUserController(listUserUseCase);


export { listUserContoller };