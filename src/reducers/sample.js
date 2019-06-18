import { SAMPLE_ACTION } from '../constants/actionTypes'

const INITIAL_STATE = {
  count: 0
}

function sampleReducer (state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case SAMPLE_ACTION : {
      return {...state, count: state.count + 1}
    }
    default: return state
  }
}

export default sampleReducer
