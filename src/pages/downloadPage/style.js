import styled from 'styled-components';


export const Wrapper=styled.div`
margin-top:76px;
&.wrapper:after{
  content: "";
  position: relative;
  bottom: 70px;
  display: table;
  width: 100%;
  height: 40px;
  background-image: linear-gradient(0deg,hsla(0,0%,59%,.15),hsla(0,0%,59%,0));
}
`;

export const Container=styled.div`
  width:930px;
  margin:0 auto;
  padding:30px 15px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  position:relative;

  .backgroundPic{
    z-index:-1;
    width:765px;
    height:172px;
    position:absolute;
    left:100px;
    top:70px;
  }

  &.container-top {
    flex-direction:column;
    justify-content:center;
    position:relative;
    margin-top:19px;
  }

  &.container-middle {
    position:relative;
    
    .img{
      width:930px;
      height:378px;
    }
    .text{
      position:absolute;
      top:0;
      left:100px;
      h3{
        width:450px;
      }
      h6{
        width:450px;
      }
    }
  }

  &.container-bottom1 {  
    .img{
      width:410px;
      height:360px;
    }
    .text{
      margin-top:76px;
      margin-left:40px;
      h3{
        width:410px;
      }
      h6{
        width:410px;
      }
    }
  }

  &.container-bottom2 {  
    .img{
      width:450px;
      height:310px;
    }
    .text{
      margin-top:76px;
      margin-left:40px;
      h3{
        width:370px;
      }
      h6{
        width:370px;
      }
    }
  }

  &.container-bottom3 {  
    .img{
      width:410px;
      height:333px;
    }
    .text{
      margin-top:76px;
      margin-left:40px;
      h3{
        width:410px;
      }
      h6{
        width:410px;
      }
    }
  }
`;

export const TopLogo=styled.div`
  width:100%;
  margin-bottom:40px;
  display:flex;
  flex-direction:row;
  justify-content:center;

  .logoPic{
    width:100px;
    height:100px;
  }
`;

export const TopInfo=styled.div`
  width:192px;
  color: #333;
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin-left:25px;
  padding-top:10px;

  .up{
    width:192px;
    height:42px;
    font-size: 30px;
  }
  .down{
    width:192px;
    height:34px;
    font-size: 24px;
    font-weight: 300;
  }
`;

export const Bottom=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;

  .bottom-left{
    width:410px;
    height:314px;
    margin-right:45px;
  }
  .scanPic{
    width:140px;
    height:140px;
    margin-top:75px;
  }

`;

export const ScanInfo=styled.div`
  color: #333;
  margin-top:10px;
  .up{
    height:34px;
    font-size: 24px;
  }
  .down{

    height:22px;
    font-size: 16px;
    font-weight: 300;
  }
`;

export const Text=styled.div`
  padding:0 15px;
  h3{
    height:30px;
    margin:20px 0;
    font-size: 28px;
    font-weight: 400;
    display: block;
  }
  h6{
    font-size: 18px;
    font-weight: 300;
    line-height: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const Footer=styled.div`
  width:960px;
  margin:50px auto 80px;
  display:flex;
  flex-direction:column;
  align-items:center;
  position:relative;
  .scanPic{
    width:140px;
    height:140px;
    margin-bottom:10px;
  }
  .footer-scan-info{
    font-size: 24px;
    color: #333;
    height:34px;
  }

  .backgroundPic{
    z-index:-1;
    width:765px;
    height:172px;
    position:absolute;
    left:100px;
    top:3px;
  }
`;

export const FooterLogo=styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  margin-top:30px;

  .logoPic{
    width:56px;
    height:56px;
  }
`;

export const FooterInfo=styled.div`
  width:112px;
  color: #333;
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin-left:8px;


  .up{
    width:112px;
    height:24px;
    font-size: 17px;
  }
  .down{
    width:112px;
    height:19px;
    font-size: 14px;
    font-weight: 300;
  }
`;