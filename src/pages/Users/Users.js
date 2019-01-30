import React, {Component} from 'react'

class Users extends Component {
  render() {
    const {location} = this.props
    return (
      <div>
        Users
        <p>query: <span style={{color: 'red'}}>{location.searchParams.get('sort')}</span></p>
      </div>
    )
  }
}

export default Users
