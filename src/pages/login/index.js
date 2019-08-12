import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {actionCreators} from './store';
import {
  LoginWrapper,
  Wrapper,
  Title,
  LogId,
  Password,
  Button
} from './style';


class Login extends PureComponent{
  render(){
    const {handleLogin,logState} = this.props;
    
    if(!logState){
      return(
        <LoginWrapper>
          <Wrapper>
            <Title>登录</Title>
            <LogId>
              <i className='iconfont'>&#xe61c;</i>
              <input placeholder="手机号或邮箱" ref={(input)=>{this.signElem=input}}></input>
            </LogId>
            <Password>
              <i className='iconfont'>&#xe613;</i>
              <input type='password' placeholder="密码" ref={(input)=>{this.passwordElem=input}}></input>
            </Password>
            <Button onClick={()=>handleLogin(this.signElem,this.passwordElem)}>登录</Button>
          </Wrapper>
        </LoginWrapper>
      )
    }else{
      //使用Redirect，如果登录状态，跳转会主页
      return <Redirect to='/' />
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
    handleLogin(signElem,passwordElem){
      dispatch(actionCreators.login(signElem.value,passwordElem.value));
    }
  }
}

export default connect(mapState,mapDispatch)(Login);