import request from '../utils/request'

if (process.env.NODE_ENV === 'development') {
  require('./mock')
}

export default {
  login: (data, config) => request.post('login', {data, ...config})
}
