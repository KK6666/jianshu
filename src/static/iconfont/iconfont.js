import { createGlobalStyle } from 'styled-components';

// 如下从reset.css网站复制,保证各个浏览器都一样的初始css
export const IconGlobalStyle=createGlobalStyle`

  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1559537352072'); /* IE9 */
    src: url('./iconfont.eot?t=1559537352072#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1559537352072') format('woff'),
    url('./iconfont.ttf?t=1559537352072') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1559537352072#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


`