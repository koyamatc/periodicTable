var _ = require('lodash');

let initialState = {
  "hitPoint":1,
  "missedPoint":2,
  "qIndex":"",
  "randomisedList":[]
  }
const pointBoard = (state=initialState, action) => {
  switch (action.type) {
    case 'START_GAME':
      return Object.assign({}, state, {
        hitPoint: 0,
        missedPoint: 0,
        qIndex : action.qIndex,
        randomisedList: action.randomisedList
      })
/*
    case 'GET_QCELL':
      return {
        qIndex
      }
*/
    case 'GET_POINTS':
      return state.pointBoard.hitPoint
    case 'HIT':
      return Object.assign({}, state, {
        hitPoint: action.hitPoint,
        qIndex: action.qIndex--
      })
    case 'MISSED':
      return Object.assign({}, state, {
        missedPoint: action.missedPoint
      })

    default:
      return state
  }
}

export default pointBoard