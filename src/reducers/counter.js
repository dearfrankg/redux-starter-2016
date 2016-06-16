import * as types from 'constants/actionTypes'

const counter = (state = 0, action) => {
  switch (action.type) {
    case types.DECREMENT:
      return state - 1

    case types.INCREMENT:
      return state + 1

    case types.RESET:
      return 0

    default:
      return state
  }
}

export default counter
