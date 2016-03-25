import React, { PropTypes } from 'react'

const Cell = ({ onClick, no, x, y }) => (
    <div
      id={no}
          key={no}
          style={{left: getX(x), top: getY(y)}}
          className="cell"
          onClick={onClick}
        >
          <p className="eNo">{no}</p>
    </div>

)

Cell.propTypes = {
  onClick: PropTypes.func.isRequired,
  no: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

/*------------*/
/* functions  */
/*------------*/
let cardWidth = 62;
let cardHeight = 70;

// get left position 
let getX = (x) => {return x * (cardWidth + 2);};
// get top position
let getY = (y) => {return y * (cardHeight + 3) + 50;};

export default Cell