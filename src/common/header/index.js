import React,{Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style';
import {connect} from 'react-redux';
import {actionCreators} from './store'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
//注意<link>要用在<BrowserRouter>内部
import { Link } from 'react-router-dom'

class Header extends Component{
  render(){
    const {focused,handleInputFocus,handleInputBlur,list,logout,logState} = this.props;
    return (
      <HeaderWrapper>
        <Link to='/jianshu'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          {
          //从login的reducer中获取到登录状态logState，登录状态为true显示退出，为否，显示登录，且点击跳转至登录页面
            logState ? 
            <NavItem className='right' onClick={logout}>退出</NavItem> :
            <Link to='/login' ><NavItem className='right' >登录</NavItem></Link>
          }       
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch 
                className={focused ? 'focused' : ''}
                onFocus={()=>handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i 
              className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
            >&#xe637;</i>
            {this.getListArea(focused)}
          </SearchWrapper>
          <Addition>
            <Link to='/write'>
              <Button className='writting'>
                <i className="iconfont">&#xe600;</i>写文章
              </Button>
            </Link>
            <Button className='reg'>注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }

  //搜索推荐区域，用是否聚焦做判断条件
  getListArea(){
    const {focused,list,page,pageTotal,mouseIn,handleOnMouseEnter,handleOnMouseLeave,handleChangePage} = this.props;

    //list为immutable类型，进行js操作前先转化为js类型的数组
    const newList = list.toJS();
    const pageList = [];

    // 当页面初始化时，会执行一遍循环，此时mewlist里没有数据，会导致错误（浏览器报key错误）
    if(newList.length){
      let iMax=page*10;
      if(iMax>newList.length){
        iMax=newList.length;
      }
      for( let i=(page-1)*10 ; i<iMax; i++){
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }
    
    //搜索栏是否聚焦和搜索推荐栏是否鼠标进入都作为推荐栏显示的判断条件
    if(focused || mouseIn){
      return(
        <SearchInfo
          //当搜索栏失焦时，SearchInfo通过鼠标进入离开控制是否显示
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={()=>handleChangePage(page,pageTotal,this.iconDom)}
            >
              {/* //ref属性可以设置为一个回调函数,ref 属性接受一个回调函数，它在组件被加载或卸载时会立即执行,ref 回调接收了底层的 DOM 元素作为参数。 此处的this.iconDom即为i的实际dom元素*/}
              <i ref={(icon)=>{this.iconDom=icon}} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {/* pageList为一个数组，react可以将数组内元素逐个解析出来 */}
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null;
    }
  }

}

const mapStateToProps = (state)=>{
  // return {
  //   //此处state.header已经变为immutable类型数据(state仍为原js对象)，属性需要用get获取
  //   focused:state.header.get('focused')
  // }
  return {
    //此处的state时通过combineReducers返回的，为immutable对象
    // focused:state.get('header').get('focused') 等同如下代码
    focused:state.getIn(['header','focused']),
    list:state.getIn(['header','list']),
    mouseIn:state.getIn(['header','mouseIn']),
    page:state.getIn(['header','page']),
    pageTotal:state.getIn(['header','pageTotal']),
    logState:state.getIn(['login','logState'])
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    handleInputFocus(list){
      //ajax发送请求后获取list的size不为0，作为判断条件，只请求一次数据，避免无意义的重复请求
      if(list.size===0){
        //发送一个请求异步数据的action
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur(){
      const action=actionCreators.searchBlur();
      dispatch(action);
    },
    handleOnMouseEnter(){
      const action= actionCreators.mouseEnter();
      dispatch(action);
    },
    handleOnMouseLeave(){
      const action= actionCreators.mouseLeave();
      dispatch(action);
    },
    handleChangePage(page,pageTotal,spin){
      //获取初始角度值（replace方法将transform里不是数字的部分全部替换为‘’，返回值为字符串）
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      if(originAngle){
        // 转化为10进制字符串
        originAngle = parseInt(originAngle,10);
      }else{
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle+360}deg)`;

      // 搜索推荐栏页码增加
      if(page<pageTotal){
        page++;
      }else{
        page=1;
      }
      const action= actionCreators.pageChange(page);
      dispatch(action);
    },

    //退出登录
    logout(){
      const action=loginActionCreators.logout();
      dispatch(action);
    }
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);