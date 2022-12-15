import { ApiResultType } from "../../../types/IApiResult";
import { IUserRepository } from "./IUserRepository";
import { DBUSER, UserProps } from '../Model/User';

class UserRepository implements IUserRepository {
  async create(user: Omit<UserProps, "_id">): ApiResultType {
    const createUser = new DBUSER(user);
    return await createUser.save()
      .then((result) => {
        return {
          status: 200,
          data: result,
        }
      })
      .catch((error) => {
        console.log(error, ' ERROR DATABASE CREATE USER');
        return {
          status: 500,
          data: 'Internal error',
        }
      })
  }

  async findByEmail(email: string): ApiResultType {
    return await DBUSER.find({email: email})
      .then((result) => {
        return {
          status: 200,
          data: result,
        }
      })
      .catch((error) => {
        console.log(error, ' ERROR DATABASE FIND USER BY EMAIL');
        return {
          status: 500,
          data: 'Internal error',
        }
      })
    }

}


export { UserRepository };