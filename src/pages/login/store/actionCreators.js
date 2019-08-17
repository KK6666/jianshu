import * as constants from './constants';
import axios from 'axios';

export const login = (sign,password)=>{
  return (dispatch)=>{
    // 匹配后端提供的账号密码，这里模拟文件里没有数据，所以全部默认为匹配成功
    axios.get('https://raw.githubusercontent.com/KK6666/jianshu/dev/public/api/login.json?sign='+sign+'&password=' +password )
    .then((res)=>{
      const result = res.data;
      // 如果后端数据匹配成功，即result有数据
      if(result){
        dispatch(loginAction(result));
      }
    })
    .catch(()=>{
      alert('登录失败');
    })
  }
}

const loginAction=(res)=>({
  type:constants.LOG_IN,
  success:res.success
})

export const logout = ()=>({
  type:constants.LOG_OUT,
  success:false
})

