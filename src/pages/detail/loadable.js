import Loadable from 'react-loadable';
import React from 'react';
import Loading from '../../common/components/loading.js'

const LoadableComponent = Loadable({
  // 异步加载，当前目录下index.js组件
  loader: () => import('./'),
  // 加载过程中，页面的临时显示组件
  loading:Loading,
  delay:300
});

export default ()=><LoadableComponent/>