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
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
     const weight = props[propName];
     const isValidWeight = weight > 80 && weight < 300;
       if (!isValidWeight) {
        return new Error('The `weight` prop should range between 80 and 300.');
      }
    }.isRequired
}
