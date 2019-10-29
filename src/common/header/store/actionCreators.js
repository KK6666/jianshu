import * as constants from './constants';
import {
  fromJS
} from 'immutable';
import axios from 'axios';

//搜索推荐栏SearchInfo的相关action数据
const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  //将data的数组设置成immutable类型
  data: fromJS(data),
  pageTotal: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: constants.SEARCH_FUCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

//thunk中间件使得此处可以返回一个函数
export const getList = () => {
  return (dispatch) => {
    // axios.get('/api/headerList.json')
    axios.get('https://raw.staticdn.net/KK6666/jianshu/gh-pages/api/headerList.json')
      // axios.get('http://yapi.demo.qunar.com/mock/96855/api/search')
      .then((res) => {
        const data = res.data.data; //取到数据的数组，不理解可打印data
        const action = changeList(data)
        dispatch(action);
      })
      .catch(() => {
        alert('axios失败')
      });
  }
}

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})

export const pageChange = (page) => ({
  type: constants.PAGE_CHANGE,
  page
})

// export const login = ()=>({
//   type:constants.LOG_IN,

// })