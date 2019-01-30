import React, {Component, Fragment} from 'react'
import {Avatar, Layout, Icon, Menu} from 'antd'
import './HeaderCustom.less'
import PropTypes from 'prop-types'
import config from '../../utils/config'
import {inject} from 'mobx-react'

const {Header} = Layout

@inject('rootStore')
class HeaderCustom extends Component {
  static propTypes = {
    user: PropTypes.object,
    collapsed: PropTypes.bool,
    onCollapseChange: PropTypes.func,
    onSignOut: PropTypes.func
  }

  handleClickMenu = (e) => {
    e.key === 'Signout' && this.props.onSignOut()
  }

  changeLocale = (e) => {
    const {rootStore} = this.props
    rootStore.changeLocale(e.key)
  }

  render() {
    const {languages} = config.i18n
    const {rootStore} = this.props
    const currentLanguage = languages.find(
      item => item.key === rootStore.locale
    )
    return (
      <Header className='header'>
        <div
          className='button'
          onClick={this.props.onCollapseChange}>
          <Icon
            className='trigger'
            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          />
        </div>
        <div className='right-container'>
          <Menu
            mode='horizontal'
            theme='light'
            selectedKeys={[currentLanguage.key]}
            onClick={this.changeLocale}>
            <Menu.SubMenu title={<Avatar size='small' src={currentLanguage.flag}/>}>
              {languages.map(item => (
                <Menu.Item key={item.key}>
                  <Avatar
                    size='small'
                    style={{marginRight: 8}}
                    src={item.flag}
                  />
                  {item.title}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          </Menu>
          <Menu
            mode='horizontal'
            theme='light'
            onClick={this.handleClickMenu}
          >
            <Menu.SubMenu
              key='avatar'
              title={
                <Fragment>
                  <span style={{color: 'rgb(153, 153, 153)', marginRight: 4}}>Hi,</span>
                  <span>{this.props.user.userName}</span>
                  <Avatar style={{marginLeft: 8}}
                          src={this.props.user.avatar}/>
                </Fragment>}>
              <Menu.Item key='SignOut'>SignOut</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </div>
      </Header>
    )
  }
}

export default HeaderCustom
