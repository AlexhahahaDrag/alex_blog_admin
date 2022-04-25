import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ResponseBody } from '@a/typing'
import { notification } from 'ant-design-vue';

const request = axios.create({
    // baseURL: process.env.VUE_APP_API_BASE_URL,
    timeout: 6000,
});

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


//异常拦截处理器
const errorHandler = (error: AxiosError): Promise<any> => {
    if (error.response) {
        const { data = {}, status, statusText } = error.response;
        //403 无权限
        if (status === 403) {
            notification.error({
                message: 'Forbidden',
                description: (data && data.message) || statusText,
            });
        }
        //401 未登录、未授权
        if (status === 401 && data.result && data.result.isLogin) {
            notification.error({
                message: 'Unauthorized',
                description: 'Authorization verification failed',
            });
        }
    } else {
        notification.error({
            message: 'system error',
            description: '请联系管理员',
        });
    }
    return Promise.reject(error);
}

//请求拦截器
const requestHandler = (
    config: AxiosRequestConfig,
): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
    const token = "bearer_eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZG1pbklkIjoiNDE2MzUyNDRiNzY0OTU1MThkMWRjODNiMDkwYzM3ODAiLCJyb2xlIjoi6LaF57qn566h55CG5ZGYIiwiY3JlYXRlX3RpbWUiOnsibW9udGgiOiJBUFJJTCIsInllYXIiOjIwMjIsImRheU9mTW9udGgiOjI1LCJob3VyIjoyMSwibWludXRlIjoyNSwibW9udGhWYWx1ZSI6NCwibmFubyI6NjgwMDAwMDAwLCJzZWNvbmQiOjQ1LCJkYXlPZldlZWsiOiJNT05EQVkiLCJkYXlPZlllYXIiOjExNSwiY2hyb25vbG9neSI6eyJpZCI6IklTTyIsImNhbGVuZGFyVHlwZSI6Imlzbzg2MDEifX0sInN1YiI6ImFsZXgiLCJpc3MiOiJtb2d1YmxvZyIsImF1ZCI6IjA5OGY2YmNkNDYyMWQzNzNjYWRlNGU4MzI2MjdiNGY2IiwiZXhwIjoxNjUxMTUyMzQ1fQ.1pZjAjHfMpRdeXowIT4zcziektj7SjwHXeDQKjrKllE";
    if(token) {
        config.headers[ 'Authorization' ] = token
    }
    return config;
}

// 添加请求拦截器
request.interceptors.request.use(requestHandler, errorHandler);

//响应拦截器
const responseHandler = (
    response: AxiosResponse,
): ResponseBody<any> | AxiosResponse<any> | Promise<any> | any => {
    console.log("response:" + response)
    return response.data;
}
// 添加响应拦截器
request.interceptors.response.use(responseHandler, errorHandler);

// export {AxiosResponse};
export default request;