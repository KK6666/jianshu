import {constants} from '../store';
import {fromJS} from 'immutable';

const defaultState = fromJS({
  downloadActive:false
})

export default (state=defaultState,action)=>{
  switch(action.type){
    case constants.DOWNLOADACTIVE:
      return state.set('downloadActive',action.boolean)
    default:
      return state;
  }
    
} 