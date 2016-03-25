let initialState = {
  "lgNo":"1","lgSymbol":"H","lgName":"hydrogen","lgNoOpacity":1}

const largeElement = (state=initialState, action) => {
  switch (action.type) {
    case 'MOUSE_ENTER':
      return Object.assign({}, state, {
        lgNo: action.no,
        lgName: action.name,
        lgJName: action.jName,
        lgSymbol: action.symbol,
        lgGroup: action.group
      })

    case 'START_GAME':
      return Object.assign({}, state, {
        lgNoOpacity: 0
      })

    case 'RESET_GAME':
      return Object.assign({}, state, {
        lgNoOpacity: 1
      })

    default:
      return state
  }
}

export default largeElement