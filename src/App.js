import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'    //路由



//引入路由组件
import Home from './components/Home'
import Discover from './components/Discover'
import Orders from './components/Orders'
import Cart from './components/Cart'
import My from './components/My'

import Detail from './components/Detail'

import Evaluate from './components/Evaluate'







//配置路由及二级路由
const App = () => (
  <Router>
    <div>
          <Route exact path="/" component={Home}/>
		      <Route path="/discover" component={Discover}/>
		      <Route path="/orders" component={Orders}/>
		      <Route path="/cart" component={Cart}/>
		      <Route path="/my" component={My}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/evaluate/:id" component={Evaluate}/>
    </div>
  </Router>
)
export default App