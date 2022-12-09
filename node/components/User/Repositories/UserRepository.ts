import { IApiResult } from "../../../types/IApiResult";
import { IUserRepository } from "./IUserRepository";

class UserRepository implements IUserRepository {
  list(): IApiResult {
    return {
      status: 200,
      data: ' ola',
    }
  }

}


export { UserRepository };