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

Product.defaultProps = {
  hasWatermark: false 
}

Product.propTypes= {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.arrayOf(PropTypes.string).isRequired,
  weight: propTypes.number.isRequired
}
