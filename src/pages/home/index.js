//home中的每个子组件都跟store连接，所以store发生改变时，不管单个组件的数据是否发生变化，都会重新渲染，造成性能浪费，可用shouldComponentUpdate判断是否重新渲染。PureComponent内置一个shouldcomponentupdate，可替换component，但需要与immutable配合使用，否则有坑
import React ,{PureComponent} from 'react';
import Topic from './components/Topic';
import Article from './components/Article';
import Recommend from './components/Recommend';
import Download from './components/Download';
import Writer from './components/Writer';
import Slide from './components/Slide';
import {Redirect} from "react-router-dom"
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'
import {connect} from 'react-redux';
import {actionCreators} from './store';

class Home extends PureComponent{
  
  render(){
    //当跳转至‘/jianshu？id=*'时，判断路由里的id是否存在，如果存在，说明是要跳转至对应detail/id
    let id=this.getUrlParam('id')
    if(id){
      let url="/detail/"+id
      return <Redirect to={url} />
    }

    return(
      <HomeWrapper className='clearfix'>
        <HomeLeft>
          <Slide />
          {/* <Topic /> */}
          <Article />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Download />
          <Writer />
        </HomeRight>
        {this.props.backTopShow ? <BackTop onClick={this.handleBackTop} ><i className='iconfont'>&#xe60c;</i></BackTop> : null}
      </HomeWrapper>
    )
  }

  //获取当前路由里的参数值
  getUrlParam(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return unescape(r[2]); return null;
  }

   
  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvents();
    //home页面挂载是将首页按钮的IndexActive设置为true
    this.props.handleIndexActive(true);
  }
  //backtop组件卸载时，解除window上的事件绑定，避免此组件事件对其他组件造成影响
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeBackTop);
    //home页面卸载是将首页按钮的IndexActive设置为false
    this.props.handleIndexActive(false);
  }

  bindEvents(){
    window.addEventListener('scroll',this.props.changeBackTop);
  }

  //sscrollTo(xpos,ypos) 方法可把内容滚动到指定的坐标。
  handleBackTop(){
    // window.scrollTop(0,0); 无过渡动画
    let scrollToTop = window.setInterval(function() {
      // pageXOffset 和 pageYOffset 属性返回文档在窗口左上角水平和垂直方向滚动的像素。
      let pos = window.pageYOffset;
      if ( pos > 0 ) {
          window.scrollTo( 0, pos - 50 ); // how far to scroll on each step
      } else {
          window.clearInterval( scrollToTop );
      }
    }, 2);
  }
}



const mapState=(state)=>({
  backTopShow:state.getIn(['home','backTopShow'])
})

const mapDispatch=(dispatch)=>({
  changeHomeData(){
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeBackTop(){
    //元素滚动条内的顶部隐藏部分的高度>300,显示回顶部按钮
    if( document.documentElement.scrollTop>300){
      const action = actionCreators.getBackTop(true); 
      dispatch(action);
    }else{
      const action = actionCreators.getBackTop(false); 
      dispatch(action);
    }
  },
  //首页按钮激活状态
  handleIndexActive(boolean){
    const action=actionCreators.indexActive(boolean);
    dispatch(action);
  }
})

export default connect(mapState,mapDispatch)(Home);