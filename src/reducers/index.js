//reducerをまとめる記述をしていく
import { combineReducers} from 'redux' //集約するためのもの
import counter from './counter' //集約されるもの

export default combineReducers({counter})