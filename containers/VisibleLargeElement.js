import { connect } from 'react-redux'
import LargeElement from '../components/LargeElement'


const mapStateToProps = (state) => {
  return state
}

const VisibleLargeElement = connect(
  mapStateToProps
)(LargeElement)

export default VisibleLargeElement