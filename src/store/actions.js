import axios from 'axios'

export default {
  async getBase({commit, state, dispatch}, params) {
    console.log('获取基地址')
    let res = await  axios.get('http://localhost:3000/base')
    // commit('updateBase', res['data']['url']) 不保存在state里面就好
    return res;
  },
  async getBaseAbout({commit, state}, params) {
    let res = await  axios.get(params + '/about')
    return res;
  }
}
