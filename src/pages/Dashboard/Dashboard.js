import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {Button} from 'antd'

@observer
class Dashboard extends Component {
  componentWillUnmount() {
    const {userStore} = this.props.rootStore
    userStore.resetData()
  }

  formatDate = (fmt, date) => {
    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      'S': date.getMilliseconds()
    }
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (const k in o)
      if (new RegExp(`(${k})`).test(fmt))
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    return fmt
  }

  render() {
    const {userStore} = this.props.rootStore
    return (
      <div>
        <p>{userStore.userName || 'Dashboard'}</p>
        <Button
          type={'danger'}
          style={{marginBottom: 12}}
          onClick={() => {
            userStore.updateUserName('Mike ' + this.formatDate('yyyy-MM-dd hh:mm:ss', new Date()))
          }}>
          mobx -> action: updateUserName
        </Button>
        <br/>
        <Button
          type={'primary'}
          onClick={() => {
            this.props.history.push(`/user?sort=${new Date().getTime()}`)
          }}>
          Link to profile
        </Button>
      </div>
    )
  }
}

export default Dashboard
