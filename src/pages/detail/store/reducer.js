import {fromJS} from 'immutable';
import {constants} from '../store';

const defaultState = fromJS({
  backTopShow:false,
  title:"",
  headPic:"",
  name:"",
  browse:"",
  time:"",
  words:"",
  read:"",
  comment:"",
  like:"",
  content:""
});

export default (state=defaultState,action)=>{
  
  switch(action.type){
    case constants.GET_BACK_TOP:
      return state.merge({
        backTopShow:action.show
      })
    case constants.GET_DETAIL:
      return state.merge({
        title:action.data.title,
        headPic:action.data.headPic,
        name:action.data.name,
        browse:action.data.browse,
        time:action.data.time,
        words:action.data.words,
        read:action.data.read,
        comment:action.data.comment,
        like:action.data.like,
        content:action.data.content
      })
    default:
      return state;
  }
}


