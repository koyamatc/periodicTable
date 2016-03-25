import { connect } from 'react-redux'
import Points from '../components/Points'


const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
/*
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
 */
  }
}

const PointBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Points)

export default PointBoard