import PropTypes from 'prop-types'
import React from 'react'

export default class Product extends React.Component {
  render() {
    return(
      <div>
        <ul>
          <li>{this.props.name}</li>
        </ul>
      </div>
    )
  }
}


