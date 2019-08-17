import React,{PureComponent,Fragment} from 'react';
import {connect} from "react-redux";
import {actionCreators} from './store';

import {
  Wrapper,
  Container,
  TopLogo,
  TopInfo,
  Bottom,
  ScanInfo,
  Text,
  Footer,
  FooterLogo,
  FooterInfo
} from './style';
import logoPic from "../../static/img/downloadPage/logoTop.png";
import bottomLeft from "../../static/img/downloadPage/bottom-left.png";
import scanPic from "../../static/img/downloadPage/scan.png";
import back from "../../static/img/downloadPage/back.png";
import middlePic from "../../static/img/downloadPage/middlePic.png";
import img1 from "../../static/img/downloadPage/1.png";
import img2 from "../../static/img/downloadPage/2.png";
import img3 from "../../static/img/downloadPage/3.png";

class DownloadPage extends PureComponent{
  render(){
    return(
      <Fragment>
        <Wrapper className="wrapper">
          <Container className="container-top">
            <TopLogo>
              <img className="logoPic" src={logoPic} alt=""/>
              <TopInfo>
                <div className="up">创作你的创作</div>
                <div className="down">一个优质创作社区</div>
              </TopInfo>
            </TopLogo>
            <img className="backgroundPic" src={back} alt=""/>
            <Bottom>
              <img className="bottom-left" src={bottomLeft} alt=""/>
              <div className="bottom-right">
                <img className="scanPic" src={scanPic} alt=""/>
                <ScanInfo>
                  <div className="up">扫码下载简书App</div>
                  <div className="dowm">随时随地发现和创作内容</div>
                </ScanInfo>
              </div>
            </Bottom>
          </Container>
        </Wrapper>  

        <Container className='container-middle'>
          <Text className="text">  
            <h3>轻松创作精美图文</h3>
            <h6>简单优雅的设计，可以一次上传多张图片、实时保存、多端同步，使创作分享更方便快捷</h6>
          </Text>
          <img src={middlePic} className="img" alt=""/>
        </Container>

        <Container className='container-bottom1'>
          <img src={img1} className="img" alt=""/> 
          <Text className="text">  
            <h3>多元化的创作社区</h3>
            <h6>一篇短文、一首诗、一幅画，在这里，你的创作将得到全世界的赞赏</h6>
          </Text>
        </Container>

        <Container className='container-bottom2'>
          <Text className="text">  
            <h3>百万创作者在简书相遇</h3>
            <h6>在简书，仍有数百万创作者在坚持产出优质创作，有数千万读者在用心交流创作；众多精彩创作，只在简书看得到</h6>
          </Text>
          <img src={img2} className="img" alt=""/>
        </Container>

        <Container className='container-bottom3'>
          <img src={img3} className="img" alt=""/>
          <Text className="text">  
            <h3>自由地交流和沟通</h3>
            <h6>你可以发表评论、沟通想法。觉得不够？还能给创作者发简信，和无数传遍中文互联网的创作者直接交流</h6>
          </Text> 
        </Container>

        <Footer>
          <img src={scanPic} className="scanPic" alt=""/>
          <img className="backgroundPic" src={back} alt=""/>
          <div className="footer-scan-info">扫码下载简书App</div>
          <FooterLogo>
            <img className="logoPic" src={logoPic} alt=""/>
            <FooterInfo>
              <div className="up">创作你的创作</div>
              <div className="down">一个优质创作社区</div>
            </FooterInfo>
          </FooterLogo>
        </Footer>
      </Fragment>
    )
  }

  componentDidMount(){
    this.props.handleDownloadActive(true)
  }

  componentWillUnmount(){
    this.props.handleDownloadActive(false)
  }
}

const mapState = (state)=>({
  downloadActive:state.getIn(['download','downloadActive'])
})

const mapDispatch = (dispatch)=>({
  handleDownloadActive(boolean){
    const action = actionCreators.downloadActive(boolean)
    dispatch(action);
  }
})


export default connect(mapState,mapDispatch)(DownloadPage);
