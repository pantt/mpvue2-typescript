import { fetch } from "../utils/axios";

export class ExampleAPI {
  baseApi = process.env.BASE_API;
  baseService = process.env.BASE_SERVICE;
  /**
   * 获取分页数据
   * @param {QueryForm} data 查询对象
   * @returns Promise
   */
  getByPage (data) {
    return fetch({
      url: "XXXXX/XXXX",
      method: 'get',
      // 此处get请求时为params,post时此参数为data
      params: data
    })
  }

  /**
   * 根据id查找对象
   * @param {string} id
   * @returns Promise
   */
  get (id) {
    return fetch({
      url: "XXXXX/XXXX" + '/' + id,
      method: 'get'
    })
  }

  /**
   * 保存数据
   * @param {SampleForm} data 保存数据对象
   */
  post (data){
    return fetch({
      url:  "XXXXX/XXXX",
      method: 'post',
      data: data
    })
  }

  /**
   * 更新数据
   * @param {SampleForm} data 修改数据对象
   */
  update (data) {
    return fetch({
      url: "XXXXX/XXXX",
      method: 'put',
      data: data
    })
  }

  /**
   * 根据id删除对象
   * @param {string} id
   */
  del (id) {
    return fetch({
      url: "XXXXX/XXXX" + '/' + id,
      method: 'delete',
      params: { id }
    })
  }
}
