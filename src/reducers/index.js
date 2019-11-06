import { combineReducers } from 'redux'

import loadingReducer from './loadingReduer'
import imagesReducer from './imgesReducer'
import errorReducer from './errorReducer'
import pageReducer from './pageReducer'

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  images: imagesReducer,
  error: errorReducer,
  nextPage: pageReducer
})

export default rootReducer