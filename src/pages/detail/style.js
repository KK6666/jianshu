import styled from 'styled-components';
import pic from '../../static/img/detail/detialDownload.png'

export const Wrapper= styled.div`
  margin: 56px auto 0;
  padding-top: 20px;
  padding-bottom: 40px;
  width: 620px; 
  position:relative;
  .outer{
    
    position:absolute;
  left:690px;
  }
`;

export const Title= styled.h1`
  font-size: 34px;
  font-weight: 700;
  margin: 20px 0 0;
  line-height: 1.3;
`;

export const WriterWrapper= styled.div`
  margin: 30px 0 40px;
  overflow:hidden;
  img{
    width:48px;
    height:48px;
    border: 1px solid #ddd;
    border-radius: 50%;
    float:left;
  }
`;

export const Writer= styled.div`
  float:left;
  margin-left: 8px;
  height:48px;
`;

export const WriterName= styled.div`
  margin-right: 3px;
  font-size: 16px;
  height:24px;
  line-height:24px;
`;

export const WriterInfo= styled.div`
  font-size: 12px;
  color: #969696;
  height:24px;
  line-height:24px;
  span{
    padding-right: 5px;
  }
  .browse{
    color:#ea6f5a!important;
    i{
      font-size:2px;
    }
  }
`;

export const Content= styled.div`
  img{
    width:700px;
    //负的margin图片超出父边框
    margin:0 -40px 0 -40px;
    padding-bottom:25px;
  }
  p{
    margin-bottom:25px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
  }
`;

export const BackTop = styled.div`
  width:50px;
  height:50px;
  border: 1px solid #dcdcdc;
  position:fixed;
  right:40px;
  bottom:50px;
  text-align:center;
  line-height:50px;
  cursor:pointer;
  .iconfont{
    font-size: 20px;
    color:#2f2f2f;
  }
`;

export const DownloadPic= styled.div`
  width:180px;
  height:260px;
  //先用外层div.outer定位水平位置，再用fixed定位本身的竖直位置
  position:fixed;
  top:80px;

  background-image:url(${pic});
  background-size:180px 260px;

  .close{
    display: block;
    width: 20px;
    height: 20px;
    line-height:20px;
    color: #999;
    position: absolute;
    right: 10px;
    top: 10px;
    font-weight: 200;
    font-size: 26px;
    outline: none;
    text-shadow: none;
    cursor: pointer;
    opacity:0.5;
  }
  .close:hover{
    opacity:1;
    font-weight: 500;
  }

  &.hide{
    display:none;
  }

  
`