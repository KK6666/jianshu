import {fromJS} from 'immutable';
import {constants} from '../store';

const defaultState = fromJS({
  topicList:[],
  articleList:[],
  recommendList:[],
  WriterList:[],
  writerPage:1,
  writerTotalPage:1,
  articlePage:1,
  backTopShow:false,
   //首页。下载App按钮激活状态
  indexActive:false
});

export default (state=defaultState,action)=>{
  switch(action.type){
    case constants.CHANGE_LIST:
      return state.merge({
        writerPage:action.page,
      })
    case constants.SET_TOTAL:
      return state.merge({
        writerTotalPage:action.totalPage
      })
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state,action)
    case constants.LOAD_MORE:
      return state.merge({
        // concat() 方法用于连接两个或多个数组。
        articleList:state.get('articleList').concat(action.data),
        articlePage:action.page
      })
    case constants.GET_BACK_TOP:
      return state.merge({
        backTopShow:action.show
      })
    case constants.INDEXACTIVE:
      return state.merge({
        indexActive:action.boolean
      })
    default:
      return state;
  }
}

//将部分代码从导出部分拿出来
const changeHomeData = (state,action)=>{
  return state.merge({
    topicList:fromJS(action.topicList),
    articleList:fromJS(action.articleList),
    recommendList:fromJS(action.recommendList),
    WriterList:fromJS(action.writerList)
  })
}


