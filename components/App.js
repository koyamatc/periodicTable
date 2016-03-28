import React from 'react'
import GameButtons from '../containers/GameButtons'
import PointBoard from '../containers/PointBoard'
import VisibleLargeElement from '../containers/VisibleLargeElement'
import CellTable from '../containers/CellTable'
import ElementTable from '../containers/ElementTable'
import Footer from './Footer'

const App = () => (
  <div>  
    <GameButtons />
    <PointBoard />
    <VisibleLargeElement />
    <CellTable />
    <ElementTable />
    <Footer />
  </div> 
)

export default App