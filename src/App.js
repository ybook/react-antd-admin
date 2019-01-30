import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Loadable from 'react-loadable'
import {observer, Provider} from 'mobx-react'
import {configure} from 'mobx'
import rootStore from './stores/RootStore'
import {Loader} from './components'
import './App.less'
import {LocaleProvider} from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import 'moment/locale/zh-cn'

configure({enforceActions: 'always'})

const loading = () => <Loader/>

const Login = Loadable({
  loading,
  loader: () => import('./pages/Login/Login')
})

const Main = Loadable({
  loading,
  loader: () => import('./Main')
})

const antdLangMap = {
  en: enUS,
  zh: zhCN
}

@observer
class App extends React.Component {
  constructor(props) {
    super(props)
    rootStore.loadLocale()
  }

  render() {
    return (
      <LocaleProvider locale={antdLangMap[rootStore.locale]}>
        <Provider rootStore={rootStore}>
          <Router>
            <Switch>
              <Route exact path='/' render={() => <Redirect to='/dashboard' push/>}/>
              <Route path='/login' component={Login}/>
              <Route path='/' component={Main}/>
            </Switch>
          </Router>
        </Provider>
      </LocaleProvider>
    )
  }
}

export default App
