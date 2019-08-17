import React ,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {ArticleWrapper,ArticleItem,ArticleInfo,LoadMore} from '../style'
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';

class Article extends PureComponent{
  render(){
    const {handleLoadMore,list,page} = this.props;

    return(
      <ArticleWrapper>
        {
          list.map( (item,index)=>{
            return(
              // <Link key={index} to={'/detail/'+item.get('id')}>
                <ArticleItem
                  key={index}
                  onClick={this.openDetail.bind(this,item)}
                >
                  <ArticleInfo>
                    <h3 className='article-title'>{item.get('title')}</h3>
                    <p className='article-content'>{item.get('content')}</p>
                    <ul>
                      <li ><i className="iconfont browse">&#xe601;</i>3.1</li>
                      <li>{item.get('category')}</li>
                      <li><i className="iconfont comment">&#xe69e;</i>1</li>
                      <li><i className="iconfont heart">&#xe60e;</i>17</li>  
                    </ul>
                  </ArticleInfo>
                  <img className='article-pic' src={item.get('src')} alt=''/>
    
                </ArticleItem>
              // </Link>
            ) 
          } )
          
        }
        <LoadMore
          onClick={()=>handleLoadMore(page)}
        >阅读更多</LoadMore>
      </ArticleWrapper>
    )
  }

  // 创建新页面，跳转值对应详情页
  openDetail(item){
      const w=window.open('about:blank');
      w.location.href='/jianshu?id='+item.get('id')
  }
}

const mapState = (state)=>{
  return({
    list:state.getIn(['home','articleList']),
    page:state.getIn(['home','articlePage'])
  })
}

const mapDispatch = (dispatch)=>({
  handleLoadMore(page){
    const action=actionCreators.loadMoreArticle(page);
    dispatch(action);
  }
})


export default connect(mapState,mapDispatch)(Article);

