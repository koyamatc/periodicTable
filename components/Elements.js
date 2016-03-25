import React, { PropTypes } from 'react'
import Element from './Element'

const Elements = ({ elements, onMouseEnter }) => (
  <div>
    {elements.map(element =>
      <Element
        key={element.no}
        {...element}
        onMouseEnter={() => 
          onMouseEnter(element.no,
                       element.name,
                       element.jName,
                       element.symbol,
                       element.group 
            )}
      />
    )}
  </div>
)

Elements.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape({
    no: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onMouseEnter: PropTypes.func.isRequired
}

export default Elements