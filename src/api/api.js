import axios from 'axios'
import qs from 'qs'
import vue from 'vue'

const request = (url, body, type = 'get', isJson = false) => {
  const query = {
    url: 'http://localhost:8080//sjsite-sso' + url,
    method: type,
    timeout: 30000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Request-Ajax': true
    }
  }
  if (type === 'get') {
    query.params = body
  } else {
    query.data = isJson ? body : qs.stringify(body, { allowDots: true })
  }
  return axios
    .request(query)
    .then(
      res => {
        return new Promise((resolve, reject) => {
          if (axios.isCancel(res.data)) {
            return
          }
          if (!res.data) {
            reject(new Error('服务器响应超时'))
            return
          }
          if (res.data.code === 401) {
            // top.location.href = res.data.re.loginUrl + '?service=' + getDynamicUrl('127.0.0.1')
          } else if (res.data.code === '0') {
            resolve(res.data)
          } else {
            // console.log(res)
            reject(res.data)
          }
        })
      },
      e => {
        switch (e.response.status) {
          // case 401: // 未登录跳转至登录页
          //   if (cookies.getCookie('ucarincLogoutUrl')) {
          //     const ucarincLogoutUrl = cookies.getCookie('ucarincLogoutUrl')
          //     location.href = ucarincLogoutUrl
          //     cookies.delCookie('ucarincLogoutUrl')
          //   } else {
          //     top.window.postMessage(
          //       {
          //         type: 'NO_LOGIN',
          //         msg: '401'
          //       },
          //       '*'
          //     )
          //     // top.location.href = getDynamicUrl('http://oa.ucarinc.com')
          //   }
          //   return Promise.reject(new Error('未登录，请重新登录'))
          // case 403: // 无权限操作
          //   top.window.postMessage(
          //     {
          //       type: 'NO_PERMISSION',
          //       msg: '403'
          //     },
          //     '*'
          //   )
          //   return Promise.reject(new Error('对不起，您暂无操作权限'))
          // default:
          //   break
        }
        return Promise.reject(e.response)
      }
    )
    .catch(e => {
      vue.prototype.$message.error(e && e.message ? e.message : '系统错误')
      return Promise.reject(e)
    })
}
export const loginApi = {
  doLogin: query => request('/Login/doLogin', query, 'post', true)
  // getArticle: query => request('/article/detail', { aid: query }, 'get', true),
  // getArticle: query => request('/article/detail/', query , 'get', true),
}
