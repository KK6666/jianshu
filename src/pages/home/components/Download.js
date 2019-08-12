import React ,{PureComponent} from 'react';
import {DownloadWrapper,DownloadRight} from '../style'

class Download extends PureComponent{
  render(){
    return(
      <DownloadWrapper>
        <img src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' alt=''/>
        <DownloadRight>
          <div>下载简书手机App ></div>
          <div>随时随地发现和创作内容</div>
        </DownloadRight>
      </DownloadWrapper>
    )
  }
}

export default Download;