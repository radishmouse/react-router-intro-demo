import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Home';
import About from './About';
import Cats from './Cats';
import PageNotFound from './PageNotFound';
import Header from './Header';
import {
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        {/* 
          Switch shows the first matching Route
          or the last Route listed.
        */}
        {/* <Home /> */}

        {/*         
          Route conditionally renders
          a component based on the
          path in the address bar.
        */}
        <Route exact path="/" component={Home} />
        {/* <Cats /> */}
        <Route path="/cats" component={Cats} />
        {/* <About /> */}
        <Route path="/about" component={About} />
        

        {/* When not using <Switch>, you can use a wildcard */}
        {/* <Route path="/*" component={PageNotFound} /> */}
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
