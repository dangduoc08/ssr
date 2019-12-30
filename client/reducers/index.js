import { combineReducers } from 'redux'
import product from './product'
import brand from './brand'

const rootReducer = combineReducers({
  product,
  brand
})

export default rootReducer 