import { IApiResult } from "../../../types/IApiResult";


export interface IUserRepository {
  list: () => IApiResult;
}