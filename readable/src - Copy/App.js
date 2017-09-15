import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as BooksAPI from './BooksAPI'
import Category from './Category'
import Posts from './Posts'

class App extends Component {

  state = {
    categories: [],
    name1: "",
    name2: "",
    name3: "",
  }

  componentWillMount () {
    const api = "http://localhost:3001"
    fetch(api, { headers: { 'AuthorizationReactND': 'whatever-you-want' }});
    
    BooksAPI.getCategories().then((categories) => {
      this.setState({
        categories: categories
      })
    });
  }

  render() {
    return (
      <div className="App">
        <Posts />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React </h2>
        </div>
        <Category categories={this.state.categories}/>
 
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
