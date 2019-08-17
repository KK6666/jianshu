import styled from 'styled-components';

export const LoginWrapper = styled.div`
  position:absolute;
  top:57px;
  left:0;
  right:0;
  bottom:0;
  background:#f1f1f1;
`;

export const Wrapper = styled.div`
  width:300px;
  padding:50px;
  margin:60px auto 0;
  background:white;
  border-radius:5px;
`;

export const Title = styled.h4`
  width:280px
  height:19px;
  padding:10px;
  text-align:center;
  font-weight: 700;
  color: #ea6f5a;
  font-size:18px;
  margin-bottom:25px;
`;

export const Explain = styled.div`
  width:280px
  height:19px;
  margin-bottom:25px;
  text-align:center;
  font-weight: 700;
  color: #ea6f5a;
  font-size:10px;
`;

export const LogId = styled.div`
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  position:relative;
  color: #777;
  input{
    width:251px;
    height:41px;
    border: 1px solid #c8c8c8;
    padding:4px 12px 4px 35px;
    background-color: hsla(0,0%,71%,.1);
    border-bottom: none;
    border-radius: 4px 4px 0 0;
  }
  i{
    position:absolute;
    top:14px;
    left:10px;
    width:18px;
    height:25px;
    text-align:center;
    line-height:25px;
  }
`;

export const Password = styled.div`
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  position:relative;
  color: #777;
  input{
    width:251px;
    height:41px;
    border: 1px solid #c8c8c8;
    padding:4px 12px 4px 35px;
    background-color: hsla(0,0%,71%,.1);
    border-radius: 0 0 4px 4px;
  }
  i{
    position:absolute;
    top:14px;
    left:10px;
    width:18px;
    height:25px;
    text-align:center;
    line-height:25px;
  }
`;

export const Button = styled.button`
  margin-top:20px;
  width:100%;
  padding:9px 18px 9px 18px;
  text-align:center;
  line-height:25px;
  background-color: rgb(49, 148, 208);
  color:white;
  border-radius:25px;
  border:none;
  font-size:18px;
`;

