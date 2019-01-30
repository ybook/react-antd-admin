import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import routes from './config'

class Routes extends Component {
  renderRoute = (r) => {
    return (
      <Route
        key={r.key}
        exact
        path={r.key}
        render={props => {
          const {search} = props.location
          if (r.parentKey) {
            props.location.parentKey = r.parentKey
          }
          props.location.title = r.title
          props.location.searchParams = new URLSearchParams(search)
          props.rootStore = this.props.rootStore
          return <r.component {...props}/>
        }}/>
    )
  }

  /**
   * 递归方式遍历路由
   * @param routes
   * @returns {*}
   */
  mapRoutes = (routes) => {
    return routes.map(r => {
      if (r.component) {
        return this.renderRoute(r)
      } else if (r.subs) {
        return this.mapRoutes(r.subs)
      } else {
        return null
      }
    })
  }

  render() {
    return (
      <Switch location={this.props.location}>
        {this.mapRoutes(routes)}
      </Switch>
    )
  }
}

export default Routes
