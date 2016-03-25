import { connect } from 'react-redux'
import { checkHit } from '../actions'
import { getQCell } from '../actions'
import { getPoints } from '../actions'
import Cells from '../components/Cells'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCellClick: (no) => {
    	let qi = dispatch(getQCell());
      dispatch(	checkHit( no,qi.randomisedList[qi.qIndex] )	)
    }
  }
}

const CellTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cells)

export default CellTable