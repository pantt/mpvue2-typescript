import axios from '../../node_modules/axios/dist/axios'
// import qs from 'qs'

// 时间戳
const NewTimeStamp = new Date().getTime()
// axios全局设置
const Axios = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 1000 * 60 * 10,
  responseType: 'json'
})

// axios.defaults.timeout = 30000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
Axios.defaults.adapter = function (config) {
  // let baseURL = process.env.BASE_API
  // 发交易之前显示加载中
  wx.showLoading({
    title: '拼命加载中...'
  })
  return new Promise((resolve, reject) => {
    // console.log(config,'adapter')
    // let data = config.method === 'get' ? config.params : qs.stringify(config.data)
    wx.request({
      url: config.url,
      method: config.method,
      data: config.params,
      success: (res) => {
        return resolve(res)
      },
      fail: (err) => {
        return reject(err)
      },
      complete: res => {
        wx.hideLoading()
        // TODO:
      }
    })
  })
}
// // axios 拦截器
// function Instance () {
//   // 请求拦截器
//   axios.interceptors.request.use(function (request) {
//     // request.headers.token = 'token=11124654654687';
//     // console.log(request) //请求成功
//     return request
//   }, function (error) {
//     // console.log(error); //请求失败
//     return Promise.reject(error)
//   })

//   // 添加响应拦截器
//   axios.interceptors.response.use(function (response) {
//     console.log(response.data.data) // 响应成功
//     return response
//   }, function (error) {
//     // console.log(error); //响应失败
//     return Promise.reject(error)
//   })
// }
// Instance()

// axios请求拦截
Axios.interceptors.request.use(
  config => {
    // 若是有做鉴权token , 就给头部带上token
    // let token = window.sessionStorage.getItem(__TOKEN_KEY__)
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  error => {
    sendError(error)
    return Promise.reject(error.data)
  }
)

// axios 响应拦截，对响应的状态处理
Axios.interceptors.response.use(
  //   function (response) {
  //     console.log(response.data.data) // 响应成功
  //     return response
  //   },
  //   function (error) {
  //     // console.log(error); //响应失败
  //     return Promise.reject(error)
  //   })

  res => {
    // 200,204为处理成功
    if ([200, 204].indexOf(res.statusCode) === -1) {
      console.log('res.status', res)
      sendError(res)
      return Promise.reject(res.data)
    }
    return res
  },
  error => {
    sendError(error)
    return Promise.reject(error)
  })

export function fetch (options) {
  return new Promise((resolve, reject) => {
    Axios(options)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * 此处为捕获到的异常，可以将此异常提交给Vuex的Store或者使用ElementUI弹出
 *
 * @param {any} error
 */
function sendError (error) {
  let type = new Date().getMilliseconds()
  let data = []
  var msg = '发生错误'
  console.log(msg)

  if (error.data) {
    data = error.data.errors
    msg = error.data.message
  } else if (error.response) {
    data = error.response.data
    msg = data.message
  } else {
    msg = error.message
  }
  let errorData = {
    type,
    data,
    message: msg
  }
  console.log(errorData)
  // 1。store.dispatch('error/appendError', errorData)
  // 2。弹出
  wx.showToast({
    title: errorData.message,
    icon: 'none',
    duration: 3000,
    complete: (res) => {

    }
  })
}
