import { connect } from 'react-redux'
import { mouseEnter } from '../actions'
import Elements from '../components/Elements'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMouseEnter: (no,name,jName,symbol,group) => {
      dispatch(mouseEnter(no,name,jName,symbol,group))
    }
  }
}

const ElementTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(Elements)

export default ElementTable