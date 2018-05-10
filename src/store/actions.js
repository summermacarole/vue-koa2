import axios from 'axios'

export default {
  getBase({commit, state, dispatch}, params) {
    console.log('获取基地址')
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/base')
        .then(res => {
          console.log(res)
          resolve(res)
          commit('updateBase', res['data']['url'])
        })
        .catch(e => {
          console.log(e)
        })
    })
  },
  getBaseAbout({commit, state}, params) {
    return new Promise((resolve, reject) => {
      axios.get(params + '/about')
        .then(res => {
          resolve(res)
        })
        .catch(e => {
          console.log(e)
        })
    })
  }
}
