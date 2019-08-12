import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
// import {actionCreators} from './store';
import {
  Wrapper
} from './style';


class Write extends PureComponent{
  render(){
    const {logState} = this.props;
    if(logState){
      return(
        <div>
          <Wrapper>写文章</Wrapper>
        </div>
      )
    }else{
      alert('请先登录');
      return <Redirect to='/login' />
    }
  }
}

const mapState = (state)=>{
  return {
    logState:state.getIn(['login','logState'])
  }
}

const mapDispatch = (dispatch)=>{
  return {
   
  }
}

export default connect(mapState,mapDispatch)(Write);
