import React, { PropTypes } from 'react'

const Points = ({ pointBoard }) => (
      <div id="pointBoard">
        <div
          id={"points"}
          className={"points"}
          
        >
          <div className="row">
            <div className="pointTitle col-xs-1"> HIT</div>
            <div className="hit col-xs-1">{pointBoard.hitPoint}</div>
          </div>
          <div className="row">
            <div className="pointTitle col-xs-1">MISS</div>
            <div className="missed col-xs-1">{pointBoard.missedPoint}</div>
          </div>
        </div>
     </div>     
)

Points.propTypes = {

  pointBoard: PropTypes.shape({
    hitPoint: PropTypes.number.isRequired,
    missedPoint: PropTypes.number.isRequired
  }).isRequired
  
}
 
export default Points