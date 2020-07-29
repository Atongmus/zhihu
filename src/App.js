import React from 'react';
import {Switch,Route,Redirect}from "react-router-dom"   

import Index from "./pages/Index/Index"
 import Detail from "./pages/Detail/Detail"
 import Comments from "./pages/Pinglun/Pinglun"
 import Collect from "./pages/Collect/Collect"
function App() {
  return (
    <div className="App">
     <Switch>
       <Route path="/index" component={Index}></Route>
       <Route path="/detail/:id" component={Detail}></Route>
       <Route path="/comments/:id" component={Comments}></Route>
       <Route path="/collect" component={Collect}></Route>
       <Redirect to="/index"></Redirect>
     </Switch>
    </div>
  );
}

export default App;
