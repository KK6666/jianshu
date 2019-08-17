import * as contants from './constants';
import {fromJS} from 'immutable';

//将原对象变为immutable对象，确保state不会被修改，可以防止不经意改变了state的错误
const defaultState = fromJS({
  focused:false,
  //immutable会把list变成一个immutable的数组，在set的时候徐注意数据也需要时immutable类型
  list:[],
  mouseIn:false,
  page:1,
  pageTotal:1
})

//此处导出的函数输出的对象为immutable对象，即index.js中的state.header
export default (state=defaultState,action)=>{
  switch(action.type){
    case contants.SEARCH_FUCUS:
      //state时immutable对象，此处的set方法会结合之前immutable的值和设置的值返回一个全新的对象，不会修改原state
      return state.set('focused',true)
    case contants.SEARCH_BLUR:
      return state.set('focused',false)
    case contants.CHANGE_LIST:
       //list为immutable数组，action.data不做修改为正常数组，不能直接用，需将action.data也设置成immutable类型（在actionCreators中设置）z
      return state.merge({
        list:action.data,
        pageTotal:action.pageTotal
      })
    case contants.MOUSE_ENTER:
      return state.set('mouseIn',true)
    case contants.MOUSE_LEAVE:
      return state.set('mouseIn',false)
    case contants.PAGE_CHANGE:
      return state.set('page',action.page) 
    default:
        return state;
  }
}
