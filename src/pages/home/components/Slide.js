import React ,{PureComponent} from 'react';

import {SlideWrapper} from '../style'

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
let mySwiper = null

class Slide extends PureComponent{
  render(){
    return(
      <SlideWrapper>
        <div className="swiper-container" onMouseOver={this.stopPlay} onMouseOut={this.startPlay}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img  alt='' src='https://upload.jianshu.io/admin_banners/web_images/4697/be549894d00e999e878881fdddb2ccc4465e97a6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
            </div>
            <div className="swiper-slide">
              <img  alt='' src='https://upload.jianshu.io/admin_banners/web_images/4688/988b811a134c1ef20dfd44fcc9138e673272a547.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
            </div>
            <div className="swiper-slide">
              <img  alt='' src='https://upload.jianshu.io/admin_banners/web_images/4703/395cd984142fc757af96125e4f0f8603a9db91cb.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
            </div>
            <div className="swiper-slide">
              <img  alt='' src='https://upload.jianshu.io/admin_banners/web_images/4680/f3832b8ec185f3772a31960a2494964132f29ce0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
            </div>
            <div className="swiper-slide">
              <img  alt='' src='https://upload.jianshu.io/admin_banners/web_images/4686/b205842c3dd6736c233b052411fe1211f164fcaf.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
            </div>
          </div>
          {/* <!-- 如果需要导航按钮 --> */}
          <div className="swiper-button-prev swiper-button-white"></div>
          <div className="swiper-button-next swiper-button-white"></div>
        </div>
      </SlideWrapper>
      
    )
  }

  
  componentDidMount(){
    mySwiper = new Swiper('.swiper-container', {
      autoplay:{
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop : true,
    })
  }

  //控制轮播图鼠标进入停止，离开开始播放
  stopPlay(){
    mySwiper.autoplay.stop();
  }
  startPlay(){
    mySwiper.autoplay.start();
  }

}

  
export default Slide;