import styled from 'styled-components';
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  height:56px;
  border-bottom:1px solid #f0f0f0;
  position:relative;
`;

export const Logo = styled.div.attrs({
  //a的跳转,跳至主页
  // href:'/'
})`
  display:block;
  width:100px;
  height:56px;
  background:url(${logoPic});
  background-size:contain;
  position:absolute;
  left:0;
  top:0
`;

export const Nav = styled.div`
  width:945px;
  height:100%;
  margin:0 auto;
  
`;

export const NavItem = styled.div`
  &.left {
    float:left;
    font-size:17px;
  }
  &.right{
    float:right;
    font-size:15px;
    color:#969696;
    cursor:pointer;
  }
  &.active{
    color:#ea6f5a;
  }
  line-height:56px;
  padding:0 15px;
`;

export const SearchWrapper = styled.div`
  float:left;
  position:relative;

  .zoom{
    position:absolute;
    right:3px;
    bottom:3px;
    width:30px;
    border-radius:15px;
    line-height:30px;
    text-align:center;
    &.focused{
      background: #777;
			color: #fff;
    }
  }
 
`;

export const NavSearch = styled.input.attrs({
  placeholder:'search'
})`
  width:160px;
  height:36px;
  border:none;
  //chorme下input使用border-radius,聚焦时出现原边框,使用outline:none可消除z
  outline: none;
  border-radius:18px;
  background-color:rgb(238, 238, 238);
  margin-top:10px;
  margin-left:20px;
  padding-left:20px;
  padding-right:35px;
  box-sizing:border-box;
  font-size:14px
  &::placeholder{
    color:#777;
  }
  &.focused{
    width:240px;
  }

  //CSSTransition控制过度动画
  &.slide-enter{
    transition:all 0.2s ease-out;
  }
  &.slide-enter-active{
    width:240px;
  }
  &.slide-exit{
    transition:all 0.2s ease-out;
  }
  &.slide-exit-active{
    width:160px;
  }

`;

export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
`;

export const Button = styled.div`
  float:right;
  height:38px;
  border-radius:19px;
  border:1px solid #ea6f5a;
  line-height:38px;
  text-align:center;
  margin-top:8px;
  margin-right:10px;
  font-size:16px;
  &.reg{
    width:78px;
    color:#ea6f5a;
  }
  &.writting{
    width:98px;
    background:#ea6f5a;
    color:white;
  }
`;


export const SearchInfo = styled.div`
  position:absolute;
  top:58px;
  left:20px;
  width:250px;
  box-shadow:0 0 8px rgba(0,0,0,.2);
  background: #fff;

`;

export const SearchInfoTitle = styled.div`
  width:210px;
  height:20px;
  margin:15px auto 10px;
  color:#969696;
  font-size:14px;
`;

export const SearchInfoSwitch = styled.span`
  float:right;
  .spin{
    font-size:10px;
    margin-right:4px;
    margin-top:1px;

    // transform只能在块元素生效
    display:block;
    float:left;
    transition:.2s;
    transform-origin:center center;
  }
  cursor:pointer
`;

export const SearchInfoList = styled.div`
  width:210px;
  margin:0 auto;
`;

export const SearchInfoItem = styled.span`
  padding:2px 6px;
  border:1px solid rgb(180, 180, 180);
  border-radius:3px;
  color:#787878;
  float:left;
  margin:0 5px 10px 0;
  font-size:12px;
`;