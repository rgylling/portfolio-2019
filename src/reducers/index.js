import { combineReducers } from 'redux'
import sampleReducer from './sample'

const rootReducer = combineReducers({
  sampleState: sampleReducer
})

export default rootReducer
