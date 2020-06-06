import React from 'react';
import {Switch,Route,Redirect}from "react-router-dom"   

import Index from "./pages/Index/Index"
 
function App() {
  return (
    <div className="App">
     <Switch>
       <Route path="/index" component={Index}></Route>
       <Redirect to="/index"></Redirect>
     </Switch>
    </div>
  );
}

export default App;
