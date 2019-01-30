import React from 'react'
import PropTypes from 'prop-types'
import './Loader.less'

const Loader = ({spinning = true, fullScreen}) => {
  const className = `loader ${!spinning ? 'hidden' : ''} ${fullScreen ? 'fullScreen' : ''}`
  return (
    <div className={className}>
      <div className='warpper'>
        <div className='inner'/>
        <div className='text'>LOADING</div>
      </div>
    </div>
  )
}

Loader.propTypes = {
  spinning: PropTypes.bool,
  fullScreen: PropTypes.bool,
}

export default Loader
