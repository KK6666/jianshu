import React ,{PureComponent} from 'react';
import {DownloadWrapper,DownloadRight} from '../style'
import dImg from "../../../static/img/download.png"
import {Link} from "react-router-dom"

class Download extends PureComponent{
  render(){
    return(
      <Link to="/downloadPage">
        <DownloadWrapper>
          <img src={dImg} alt=''/>
          <DownloadRight>
            <div>下载简书手机App ></div>
            <div>随时随地发现和创作内容</div>
          </DownloadRight>
        </DownloadWrapper>
      </Link>
    )
  }
}

export default Download;