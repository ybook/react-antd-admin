import Mock from 'mockjs'

Mock.setup({timeout: '300 - 2200'})

Mock.mock('/login', 'post', (req) => {
  const {username, password} = JSON.parse(req.body)
  if (username === 'guest' && password === 'guest') {
    return {
      code: 0,
      data: {
        token: Mock.Random.uuid(),
        username: 'guest'
      }
    }
  } else {
    return {
      code: -1,
      message: 'Invalid username and password'
    }
  }
})
