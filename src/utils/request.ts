/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from "axios";
import { message } from "ant-design-vue";

// 创建axios实例
const instance = axios.create({
  // baseURL:"",
  // timeout: 10 * 1000,
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 全局添加token
    // config.headers["Authorization"] = token;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    const data = response.data;
    // code 是后端返回的业务状态码 {code:0,data:{},message:"成功"}
    if (data.code !== 0) {
      message.error(data.message)
      return Promise.reject(new Error(data.message || "Error"));
    } else {
      return data;
    }
  },
  error => {
    const { response } = error;
    switch (response.status) {
      //404 资源不存在
      case 404:
        message.error("网络请求不存在");
        break;
      // 系统错误
      case 500:
        message.error(response.data.errorMessage || "服务器异常，请稍后重试")
        break;
      // 其他错误，直接抛出错误提示
      default:
        message.error(response.data.errorMessage || "请求出现未知错误，请稍后重试")
    }
    return Promise.reject(error);
  }
);

export default instance;
