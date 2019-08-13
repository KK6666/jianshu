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
            console.log(33)
            return(
              <Link key={index} to={'/detail/'+item.get('id')}>
                <ArticleItem>
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
              </Link>
            ) 
          } )
          
        }
        <LoadMore
          onClick={()=>handleLoadMore(page)}
        >阅读更多</LoadMore>
      </ArticleWrapper>
    )
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

