/**
 * 测试接口列表
 */

import base from "./base"; // 导入接口域名列表
import axios from "../utils/request"; // 导入request中创建的axios实例

const common = {
  /**
   * 登录
   * @param params 
   */
  login(params: any) {
    return axios.post(`${base.baseUrl}/login`, params)
  }
};

export default common;
