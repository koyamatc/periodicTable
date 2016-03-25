import React from 'react'
import GameButtons from '../containers/GameButtons'
import PointBoard from '../containers/PointBoard'
import VisibleLargeElement from '../containers/VisibleLargeElement'
import CellTable from '../containers/CellTable'
import ElementTable from '../containers/ElementTable'

const App = () => (
  <div>  
    <GameButtons />
    <PointBoard />
    <VisibleLargeElement />
    <CellTable />
    <ElementTable />
  </div>  
)

export default App