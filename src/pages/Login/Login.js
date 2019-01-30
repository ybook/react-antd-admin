import React, {PureComponent, Fragment} from 'react'
import {Button, Row, Form, Input} from 'antd'
import config from '../../utils/config'
import './Login.less'

const FormItem = Form.Item

@Form.create()
class Login extends PureComponent {
  handleOk = (e) => {
    e.preventDefault()
    const {form} = this.props
    const {validateFieldsAndScroll} = form
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      if (values.username === 'guest' && values.password === 'guest') {
        this.props.history.push('/')
      } else {

      }
    })
  }

  render() {
    const {form} = this.props
    const {getFieldDecorator} = form
    return (
      <Fragment>
        <div className='form'>
          <div className='logo'>
            {/*<img alt='logo' src={config.logoPath}/>*/}
            <span>{config.siteName}</span>
          </div>
          <form>
            <FormItem hasFeedback>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                  },
                ],
              })(
                <Input
                  onPressEnter={this.handleOk}
                  placeholder={`Username`}
                />
              )}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                  },
                ],
              })(
                <Input
                  type='password'
                  onPressEnter={this.handleOk}
                  placeholder={`Password`}
                />
              )}
            </FormItem>
            <Row>
              <Button
                type='primary'
                onClick={this.handleOk}
              >
                Sign in
              </Button>
              <p>
                <span>
                  Username：guest
                </span>
                <span>
                  Password：guest
                </span>
              </p>
            </Row>
          </form>
        </div>
        <div className='footer'>

        </div>
      </Fragment>
    )
  }
}

export default Login
