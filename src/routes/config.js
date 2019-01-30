import React from 'react'
import Loadable from 'react-loadable'
import {Loader} from '../components'

const loading = (props) => {
  if (props.pastDelay) {
    return <Loader/>
  }
  return null
}

const Dashboard = Loadable({
  loading,
  loader: () => import('../pages/Dashboard/Dashboard')
})
const Profile = Loadable({
  loading,
  loader: () => import('../pages/Users/Users')
})

export default [
  {
    key: '/dashboard',
    title: 'Dashboard',
    zhTitle: '仪盘表',
    icon: 'dashboard',
    component: Dashboard
  },
  {
    key: '/user',
    title: 'Users',
    zhTitle: '用户管理',
    icon: 'user',
    component: Profile
  },
  {
    key: '/message',
    title: 'Message',
    zhTitle: '消息管理',
    icon: 'message',
    subs: [
      {key: '/message/option1', parentKey: '/message', title: 'Option1', component: () => <div>Option1</div>},
      {key: '/message/option2', parentKey: '/message', title: 'Option2', component: () => <div>Option2</div>},
      {key: '/message/option3', parentKey: '/message', title: 'Option3', component: () => <div>Option3</div>}
    ]
  }
]
