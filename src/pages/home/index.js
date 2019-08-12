//home中的每个子组件都跟store连接，所以store发生改变时，不管单个组件的数据是否发生变化，都会重新渲染，造成性能浪费，可用shouldComponentUpdate判断是否重新渲染。PureComponent内置一个shouldcomponentupdate，可替换component，但需要与immutable配合使用，否则有坑
import React ,{PureComponent} from 'react';
import Topic from './components/Topic';
import Article from './components/Article';
import Recommend from './components/Recommend';
import Download from './components/Download';
import Writer from './components/Writer';
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
    return(
      <HomeWrapper className='clearfix'>
        <HomeLeft>
          <img className='pic' alt='' src='https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
          <Topic />
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
  
  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvents();
  }

  //backtop组件卸载时，解除window上的事件绑定，避免此组件事件对其他组件造成影响
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeBackTop);
  }

  bindEvents(){
    window.addEventListener('scroll',this.props.changeBackTop);
  }

  //sscrollTo(xpos,ypos) 方法可把内容滚动到指定的坐标。
  handleBackTop(){
    window.scrollTo(0,0);
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
   
  }
})

export default connect(mapState,mapDispatch)(Home);