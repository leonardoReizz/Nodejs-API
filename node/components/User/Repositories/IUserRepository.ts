import { ApiResultType } from "../../../types/IApiResult";
import { UserProps } from "../Model/User";


export interface IUserRepository {
  create: (user: Omit<UserProps, '_id'>) => ApiResultType;
  findByEmail: (email: string) => ApiResultType;
}