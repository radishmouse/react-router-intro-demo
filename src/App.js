import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Home';
import About from './About';
import Cats from './Cats';
import Cat from './Cat';
import PageNotFound from './PageNotFound';
import Header from './Header';
import {
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [
        'oakley',
        'milla',
        'angela',
        'chris'
      ]     
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        {/* Link is what you use
            instead of an anchor!
         */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/felines">Cats</Link>
        {/* 
          anchor tags only work locally, not on aws
          (because it makes the browser send a new request)
         */}
        {/* <a href="/cats">cats, please</a> */}
        <br />
        <Link to="/about">About</Link>
         <br />
        <Link to="/knowhere">nowhere</Link>
        <br />
        <Link to="/asdfasdfsaf">nothing</Link>
        
        <Switch>
          {/* 
            Switch shows the first matching Route
            or the last Route listed.
          */}
          {/* <Home /> */}
          {/*         
            Route conditionally renders
            a component based on the
            path in the
            address bar.
          */}
  
          <Route exact path="/" component={Home} />
          {/* <Cats /> */}
          {/* <Route path="/felines" component={Cats} /> */}
          {/* To pass custom props (in addition to location, match, and history) to a "Routed Component", you need a technique called "render props" */}
          <Route path="/felines"
              render={(props) => (
                <Cats 
                  {...props}
                  cats={this.state.cats}
                />
              )}
          />

          {/* <About /> */}
          <Route path="/about" component={About} />
          
  
          {/* When not using <Switch>, you can use a wildcard */}
          {/* <Route path="/*" component={PageNotFound} /> */}
          <Route component={PageNotFound} />
        </Switch>
        <Route path="/felines/:cat" component={Cat} />
      </div>
    );
  }
}


export default App;
