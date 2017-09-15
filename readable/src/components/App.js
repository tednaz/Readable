import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import * as ReadableApi from '../utils/ReadableApi'
import AllPostsNonCategorized from './AllPostsNonCategorized'
import { Route } from 'react-router-dom'
import Posts from './Posts'


class App extends Component {
  state = {
    categories: []
  }

  componentDidMount(){
    ReadableApi.getCategories().then((categories) => {
      this.setState({categories})
    })
  }

  render() {

    return (
      <div className="App">
                <Route exact path='/' render={() => (
                  <AllPostsNonCategorized /> 
                    )}
                />
                <Route exact path='/createPost' render={() => (<Posts />  )}  /> 

      </div>
    );
  }
}

export default App;