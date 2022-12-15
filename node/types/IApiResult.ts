export interface ApiResult {
  status: number;
  data: any;
}

export type ApiResultType = Promise<ApiResult>

