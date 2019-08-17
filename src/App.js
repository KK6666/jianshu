import React,{Component} from 'react';
import {GlobalStyle} from './style.js';
import {IconGlobalStyle} from './static/iconfont/iconfont.js'
import Header from './common/header/index.js';
import store from './store';
import {Provider} from 'react-redux';
import { BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/home/index.js';
// Detail从loadbale.js中加载,使得Detail成为一个异步组件（主页加载时，不显示详情页，也就不需要加载，当需要显示详情页时，再从loadale中异步加载，提升性能）。可以在network里的js中查看，如果不使用异步加载，所有内容在一开始全部加载完，使用异步后，会创建新的js文件加载新的内容
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import DownloadPage from './pages/downloadPage/loadable.js';

class App extends Component {
  render(){
    return (
      <div>
        <GlobalStyle />
        <IconGlobalStyle />
        <Provider store={store}>
            <BrowserRouter>
              <div>
                <Header />
                {/* exact 寻找精准路径 */}
                <Route path='/jianshu' exact component={Home}></Route>
                {/* detail：id表示路径为/detail，且需要加参数id（如1，2） */}
                <Route path='/detail/:id' exact component={Detail}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/write' exact component={Write}></Route>
                <Route path='/downloadPage' exact component={DownloadPage}></Route>
              </div>
            </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
