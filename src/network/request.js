import axios from 'axios'

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    // baseUrl: 'https://easy-mock.com/mock/5d511f91f429f82e7a7c8522/example',
    timeout: 5000
  })

  // request 拦截器
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log(err);
  })

  // response 拦截器
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.log(err);
  })

  return instance(config);
}