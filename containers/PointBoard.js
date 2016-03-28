import { connect } from 'react-redux'
import Points from '../components/Points'


const mapStateToProps = (state) => {
  return state
}

const PointBoard = connect(
  mapStateToProps
)(Points)

export default PointBoard