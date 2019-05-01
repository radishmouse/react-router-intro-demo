import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Home';
import About from './About';
import Cats from './Cats';

import {
  Link,
  Route
} from 'react-router-dom';


// What is bind?
// - it's a way to make sure a method knows who `this` is.

// Why do I bind?
// When do I need bind?

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
    // I *definitely* have access to the instance.
    // I will use .bind to "lock in" the value of `this`
    this._incrementCount = this._incrementCount.bind(this);
    // Functions are "callable" objects.
    // As an object, they can have methods.
    // One of their methods is .bind
    // .bind returns a new copy of the function, with the value of `this` locked in.
  }

  componentDidMount() {
    // Earlier, alternative syntax did not give you a copy of the function,
    // it ran the function.    
    // this._incrementCount.apply(this, [1234]);
    // this._incrementCount.call(this, 99999);
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
        <button onClick={this._incrementCountUsingArrow}>increment</button>
        {/* Link is what you use
            instead of an anchor!
         */}
        <Link to="/">Home</Link>
        <Link to="/cats">Cats</Link>
        <Link to="/about">About</Link>
  
        {/* <Home /> */}
        <Route exact path="/" component={Home} />
        {/* <Cats /> */}
        <Route path="/cats" component={Cats} />
        {/* <About /> */}
        <Route path="/about" component={About} />
      </div>
    );
  }
  // "normal" method
  _incrementCount(howMuchBy=1) {
    console.log('App: _incrementCount got called');
    console.log(this);
    // debugger;
    this.setState({
      counter: this.state.counter + howMuchBy
    });
  }
  // Arrow functions give you "auto .bind"
  _incrementCountUsingArrow = () => {
    console.log('App: _incrementCountUsingArrow got called');
    this.setState({
      counter: this.state.counter + 1
    });
  }
}

export default App;
