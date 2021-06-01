import request from '@u/request';
export type LoginType = 'account' | 'telephone';

interface LoginParams {
    type: LoginType;
    username: string;
    password: string;
}

interface Params {
    [key: string]: any;
}

export interface RequestParam {
    resultAsMap: boolean;
    variables: Params;
}

export const resetParams = (params: Params): RequestParam => {
    return {
        resultAsMap: true,
        variables: {
            ...params,
        },
    };
};

export async function login(params: LoginParams): Promise<any> {
    return request.post('/api/authc/login', resetParams(params));
}