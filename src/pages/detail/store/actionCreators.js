import * as constants from './constants';
import Axios from 'axios';

export const getBackTop=(show)=>({
  type:constants.GET_BACK_TOP,
  show
})

export const getDetailAction=(id)=>{
  return (dispatch)=>{
    Axios.get('/api/detail.json?id='+id)
      .then((res)=>{
        const data = (res.data.data);

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
