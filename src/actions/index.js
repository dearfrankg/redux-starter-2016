import * as types from 'constants/actionTypes'

export const dec = () => ({
  type: types.DECREMENT
})

export const inc = () => ({
  type: types.INCREMENT
})

export const reset = () => ({
  type: types.RESET
})
