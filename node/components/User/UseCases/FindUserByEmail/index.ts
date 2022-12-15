import { UserRepository } from "../../Repositories/UserRepository";
import { FindUserByEmailController } from "./FindUserByEmailController";
import { FindUserByEmailUseCase } from './FindUserByEmailUseCase';


const userRepository = new UserRepository();
const findUserByEmailUseCase = new FindUserByEmailUseCase(userRepository);
const findUserByEmailController = new FindUserByEmailController(findUserByEmailUseCase);


export { findUserByEmailController };