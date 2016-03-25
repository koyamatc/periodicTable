import React, { PropTypes } from 'react'
import Cell from './Cell'

const Cells = ({ cells, onCellClick }) => (
  <div>
    {cells.map(cell =>
      <Cell
        key={cell.no}
        {...cell}
        onClick={() => onCellClick(cell.no)}
      />
    )}
  </div>
)

Cells.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.shape({
    no: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onCellClick: PropTypes.func.isRequired
}

export default Cells