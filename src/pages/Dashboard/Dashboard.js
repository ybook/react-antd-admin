import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {Button} from 'antd'

@observer
class Dashboard extends Component {
  render() {
    return (
      <div>
        <Button
          type={'primary'}
          onClick={() => {
            this.props.history.push(`/app/user?sort=${new Date().getTime()}`)
          }}>
          Link to profile
        </Button>
      </div>
    )
  }
}

export default Dashboard