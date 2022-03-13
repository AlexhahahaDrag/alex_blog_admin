import request from '@/utils/request';
// 将请求数据转换为form-data格式
// 这里不用qs，用FormData也可以，不赘述

export interface LoginParams {
  isRememberMe?: boolean;
  username: string;
  password: string;
  type?: string;
}

function transParams (data) {
  let params = new URLSearchParams();
  for (let item in data) {
    params.append(item, data['' + item + '']);
  }
  return params;
  // console.log(qs.stringify(data));
  // return qs.stringify(data); 
};

interface Params {
  [key: string]: any;
}

export async function login(params: LoginParams) {
  return request.post('/api/auth/login', transParams(params));
}