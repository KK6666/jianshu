import {fromJS} from 'immutable';
import {constants} from '../store';

const defaultState = fromJS({
  logState:false
});

export default (state=defaultState,action)=>{
  switch(action.type){
    case constants.LOG_IN:
      return state.merge({
        logState:action.success
      })
    case constants.LOG_OUT:
      return state.merge({
        logState:action.success
      })
    default:
      return state;
  }
}

