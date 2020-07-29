import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 引入antd-mobile
import 'antd-mobile/dist/antd-mobile.css'
//配置redux
import {Provider} from "react-redux"
import store from "./store"
//引入全局样式
import "./assets/css/reset.css"
import "./assets/js/rem"
import "./assets/icon/iconfont.css"
import { HashRouter } from 'react-router-dom';


ReactDOM.render(
  <Provider store={store}>
    <HashRouter><App /></HashRouter>
  </Provider>,
  document.getElementById('root')
);

