import {combineReducers} from 'redux'
import characters from './charachters_reducer'
import heroes from './heroes_reducer'

const rootReducer = combineReducers({
  characters,
  heroes
})

export default rootReducer;
