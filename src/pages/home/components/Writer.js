import React ,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {
  WriterWrapper,
  WriterItem,
  WriterHeader,
  WriterSwitch,
  WriterInfo,
  WriterName,
  WriterWrite,
  Collect,
  InfoHeader,
  LookMore
} from '../style';
import { changeList,setTotal } from '../store/actionCreators';


class Writer extends PureComponent{
  render(){
    const {page,totalPage,handleChangeList} = this.props;
    return(
       <WriterWrapper>
        <WriterHeader>
          <span className='recommendWriter'>推荐作者</span>
          <WriterSwitch 
            onClick={()=>{handleChangeList(page,totalPage,this.iconDom)}}
          >
            <i ref={(icon)=>{this.iconDom=icon}}  className="iconfont spin">&#xe851;</i>
              换一批
          </WriterSwitch>
        </WriterHeader>
        {this.getWriterList()}
        <LookMore>查看全部 ></LookMore>
      </WriterWrapper>
    )
  }

  getWriterList(){
    const {list,page,setTotolPage} =this.props;
    setTotolPage(list);

    const newList=list.toJS();
    const writerList=[];
    let iMax=page*5;
    if(iMax>newList.length){iMax=newList.length}
    for(let i=(page-1)*5; i<iMax; i++){
      writerList.push(
        <WriterItem key={newList[i].id}>
          <img className='writerImg' src={newList[i].src} alt='' />
          <WriterInfo>
            <InfoHeader>
              <WriterName>{newList[i].name}</WriterName>
              <Collect><i className='iconfont'>&#xe602;</i>关注</Collect>
            </InfoHeader>
            <WriterWrite>写了{newList[i].write}K字&nbsp;&nbsp;&nbsp;{newList[i].like}K喜欢</WriterWrite>
          </WriterInfo>
        </WriterItem>
      );
    }
    return(writerList);
  }
}

const mapState = (state)=>{
  return({
    list:state.getIn(['home','WriterList']),
    page:state.getIn(['home','writerPage']),
    totalPage:state.getIn(['home','writerTotalPage'])
  })
}
const mapDispatch = (dispatch)=>{
  return({
    //设置总页数
    setTotolPage(list){
      const newList=list.toJS();
      const action= setTotal(newList);
      dispatch(action);
    },
    handleChangeList(page,totalPage,spin){
      console.log(page,totalPage)
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      if(originAngle){
        // 转化为10进制字符串
        originAngle = parseInt(originAngle,10);
      }else{
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle+360}deg)`;
      

      if(page<totalPage){
        page++
      }else{
        page=1
      }
      console.log(page,totalPage)
      const action = changeList(page);
      dispatch(action);
    }
  })
}

export default connect(mapState,mapDispatch)(Writer);