import styled from 'styled-components';
import r1 from '../../static/img/recommend/1.png'
import r2 from '../../static/img/recommend/2.png'
import r3 from '../../static/img/recommend/3.png'
import r4 from '../../static/img/recommend/4.png'


export const HomeWrapper = styled.div`
  &.clearfix:after{
    content:"";
    display:block;
    clear:both;
  }
  &.clearfix{
    zoom:1；
  }
  width:960px;
  margin:0 auto;

  .pic{
    width:100%;
    height:270px;
    border-radius:8px;
  }
`;

export const HomeLeft = styled.div`
  float:left;
  width:625px;
  padding:30px 0 0 15px;
`;

export const HomeRight = styled.div`
  float:left;
  width:280px
  padding-top:30px;
  margin-left:40px;
`;

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;

  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-right: 18px;
	margin-bottom: 18px;
	padding-right: 10px
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ArticleWrapper = styled.div`
  width:625px;
  
`;

export const ArticleItem = styled.div`
  overflow:hidden;
  padding:15px 2px 20px 0;
  border-bottom:1px solid #dcdcdc;
  margin-bottom:15px; 
  .article-pic{
    width:148px;
    height:98px;
    float:right;
  }
  .article-title{
    font-size:18px;
    font-weight: 700;
    line-height:27px;
    color:#333;
    text-align:left
  }
  .article-content{
    width:458px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
    margin: 0 0 8px;
  }
  ul{
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    height:20px;
    li{
      float:left;
      font-size:12px;
      margin-right:14px;
      color:#b4b4b4;
      
      .comment{
        font-size:14px;
        margin-right:3px;
      }
      .heart{
        font-size:10px;
        margin-right:3px;
        
      }
    }
    
    li:nth-of-type(1){
      color:#ea6f5a;
      i{
        font-size:8px;
        margin-right:3px;
      }
    }
  }
`;

export const ArticleInfo = styled.div`
  width:458px;
  float:left;
`;

export const LoadMore = styled.div`
  width:595px;
  height:20px;
  border-radius: 20px;
  background-color: #a5a5a5;
  margin: 30px auto 60px;
  padding: 10px 15px;
  color: #fff;
  text-align: center;
  font-size: 15px;
  line-height:20px;
  cursor: pointer;
`;

export const RecommendWrapper =styled.div`
  width:280px;
  padding-bottom:4px;
`;

export const RecommendItem =styled.div`
  width:100%;
  height:50px;
  //接受父级组件传递的imgUrl
  // background: url(${(props) => props.imgUrl});
  background-size:contain;

  //github 暂时调整
  margin-bottom:6px;
  &.r1{
    background: url(${r1});
    background-size:contain;
  } 
  &.r2{
    background: url(${r2});
    background-size:contain;
  }
  &.r3{
    background: url(${r3});
    background-size:contain;
  }
  &.r4{
    background: url(${r4});
    background-size:contain;
  }
`;

export const DownloadWrapper =styled.div`
  overflow:hidden;
  padding:10px 22px 10px 22px;
  width: 234px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  margin-bottom:30px;
  
  img{
    width:60px;
    height:60px;
    float:left;
  }
`;

export const DownloadRight =styled.div`
  float:right;
  margin-right:19px;
  margin-top:8.5px;
  width:143px;
  height:43px;
  div:nth-of-type(1){
    font-size:15px;
    height:21px;
    line-height:21px;
  }
  div:nth-of-type(2){
    font-size:13px;
    color:#999;
    margin-top:4px;
    height:18px;
    line-height:18px;
  }
`;

export const WriterWrapper = styled.div`
  width:100%;
`;

export const WriterItem = styled.div`
  maigin-top:15px;
  width:100%;
  height:47px;
  overflow:hidden;
  margin-bottom:10px;
  .writerImg{
    float:left;
    width:48px;
    height:48px;
    border-radius:24px;
    border:1px solid rgb(221, 221, 221);
    box-sizing:border-box;
  }
`;

export const WriterHeader = styled.div`
  width:100%;
  overflow:hidden;
  font-size:14px;
  color:#969696;
  margin-bottom:15px;
  .recommendWriter{
    float:left;
  }
`;

export const WriterSwitch = styled.div`
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

export const WriterInfo = styled.div`
  float:left;
  width:212px;
  height:47px;
  padding-left:20px;
  
`;

export const InfoHeader = styled.div`
  padding-top:5px;
  height:25px;
`;

export const WriterName = styled.span`
  font-size:14px;
`;

export const Collect = styled.span`
  font-size:13px;
  color:#42c02e;
  float:right
`;
export const WriterWrite = styled.div`
  margin:2px 0 10px 0;
  height:20px;
  font-size:12px;
  color:#969696;
`;
export const LookMore = styled.div`
  width: 100%;
  height:35px;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  box-sizing: border-box;
  text-align: center;
  line-height:35px;
`;

export const BackTop = styled.div`
  width:50px;
  height:50px;
  border: 1px solid #dcdcdc;
  position:fixed;
  right:40px;
  bottom:50px;
  cursor:pointer;
  text-align:center;
  line-height:50px;
  .iconfont{
    font-size: 20px;
    color:#2f2f2f;
  }
`;




