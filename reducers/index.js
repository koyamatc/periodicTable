import { combineReducers } from 'redux'
import cells from './cells'
import elements from './elements'
import largeElement from './largeElement'
import pointBoard from './pointBoard'
import gameButtons from './gameButtons'

const periodicTableApp = combineReducers({
  cells,
  elements,
  largeElement,
  pointBoard,
  gameButtons
})

export default periodicTableApp