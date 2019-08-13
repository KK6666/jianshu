import * as constants from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';


export const changeList = (page)=>({
  type:constants.CHANGE_LIST,
  page:page,
})

export const setTotal = (newList)=>({
  type:constants.SET_TOTAL,
  totalPage:Math.ceil(newList.length/2)
})

export const getHomeInfo=()=>{
  return (dispatch)=>{
    axios.get('/api/home.json')
    // axios.get('https://raw.githubusercontent.com/KK6666/jianshu/master/public/api/home.json')
    .then((res)=>{
      const result = res.data.data;
      const action = changeHomeData(result);
      dispatch(action)
    })
    .catch((e)=>{
      alert('home-axios错误');
    })
  }
}

export const getBackTop=(show)=>({
  type:constants.GET_BACK_TOP,
  show
})

export const loadMoreArticle =(page)=>{
  return (dispatch)=>{
    //这里获取数据时，可向路由添加page参数，根据后端提供的数据，page不同获取不同数据。
    // page初始值为1，第一次点击加载更多，page=1，随后page+1传递给reducer
    // 这里数据用的articleList.json里没有page相关数据，reducer中concat会将articleList.json里的数据全部连接
    axios.get('https://raw.githubusercontent.com/KK6666/jianshu/master/public/api/articleList.json?page='+ page)
    .then((res)=>{
      const data = fromJS(res.data.data)
      const action = {
        type:constants.LOAD_MORE,
        data:data,
        page:page+1
      }
      dispatch(action);
    })
    .catch(()=>{
      alert('articleList-axios异常');
    })
    
  }
}


const changeHomeData = (result)=>({
  type:constants.CHANGE_HOME_DATA,
  topicList:result.topicList,
  writerList:result.writerList,
  recommendList:result.recommendList,
  articleList:result.articleList
})