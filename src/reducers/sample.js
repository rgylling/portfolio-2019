import { SAMPLE_ACTION } from '../constants/actionTypes'

const INITIAL_STATE = {
  count: 0
}

function sampleReducer (state = INITIAL_STATE, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case SAMPLE_ACTION : {
      console.log('sample action')
      return {...state, count: action.count}
    }
    default: return state
  }
}

export default sampleReducer
