import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


import {createStore , combineReducers} from 'redux'  //redux
import reducersObj from './reducers/index'


import {Provider} from 'react-redux'  //react-redux


import './static/iconfont/iconfont.css'
import './static/iconfont/iconfont.js'


// 引入编译完的 css
import './App.css'
import './styles/home.scss'
import './styles/datail.scss'
import './styles/evaluate.scss'
import './styles/classify.scss'

//结合reducer
const reducers =combineReducers(reducersObj)


//创建store
const store =createStore(reducers)






  
//渲染页面的函数
const renderPage=()=>{
	ReactDOM.render(
	    <Provider store={store}>
		    <App />
	    </Provider >
	      , document.getElementById('root'));
}

renderPage()

//订阅
store.subscribe(renderPage)




registerServiceWorker(); //性能优化