import React from 'react';
import './App.css';
import Header from './components/Header';
import Home   from './components/Home';
import Detail from './components/Detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//The Route will let know to show detail or to bring back to home page with the same header
function App() {
  return (
    <div className="App">
     <Router>
        <Header/>
        <Switch>
          <Route path="/detail">
            <Detail/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
