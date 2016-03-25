let initialState =
  {"showRuleFlag":false,
   "showCompleteFlag":false,
   "showOverFlag":false}

const gameButtons = (state=initialState, action) => {
//  console.log(action.type);
  switch (action.type) {
    case 'SHOW_GAME_RULE':
      return Object.assign({}, state, {
        showRuleFlag: true
      })

    case 'CLOSE_GAME_RULE':
      return Object.assign({}, state, {
        showRuleFlag: false
      })

    case 'SHOW_GAME_OVER':
      return Object.assign({}, state, {
        showOverFlag: true
      })

    case 'CLOSE_GAME_OVER':
      return Object.assign({}, state, {
        showOverFlag: false
      })

    case 'SHOW_GAME_COMPLETE':
      return Object.assign({}, state, {
        showCompleteFlag: true
      })

    case 'CLOSE_GAME_COMPLETE':
      return Object.assign({}, state, {
        showCompleteFlag: false
      })

    default:
      return state
  }
}

export default gameButtons