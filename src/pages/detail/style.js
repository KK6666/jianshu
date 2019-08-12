import styled from 'styled-components';

export const Wrapper= styled.div`
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 40px;
  width: 620px; 
`;

export const Title= styled.h1`
  font-size: 34px;
  font-weight: 700;
  margin: 20px 0 0;
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