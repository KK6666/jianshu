//从redux-immutable导入的conmbineReducer生成的对象就是immutable对象
import {combineReducers} from 'redux-immutable';
import {reducer as haederReducer} from '../common/header/store';
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as detailReducer} from '../pages/detail/store'
import {reducer as loginReducer} from '../pages/login/store'
import {reducer as downloadReducer } from '../pages/downloadPage/store'

const reducer = combineReducers({
  detail:detailReducer,
  header: haederReducer,
  home: homeReducer,
  login: loginReducer,
  download:downloadReducer
});

//导出的reducer为immutable对象，即index.js中使用的state
export default reducer;