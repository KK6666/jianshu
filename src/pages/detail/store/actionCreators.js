import * as constants from './constants';
import axios from 'axios';

export const getBackTop=(show)=>({
  type:constants.GET_BACK_TOP,
  show
})

export const getDetailAction=(id)=>{
  return (dispatch)=>{
    // axios.get('/api/detail.json?id='+id)
    
    axios.get('https://raw.githubusercontent.com/KK6666/jianshu/dev/public/api/detail.json?id='+id)
      .then((res)=>{
        id--;
        const data = res.data.data[id];
        const action={
          type:constants.GET_DETAIL,
          data:data
        }
        dispatch(action);
      })
      .catch(()=>{
        alert('axios-datail异常');
      })
    }
}
