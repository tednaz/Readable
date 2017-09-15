import React, {Component} from 'react';
import {Form, Field} from 'simple-react-forms';

import * as BooksAPI from './BooksAPI'

class Posts extends Component {
  state = {
    postEntry: {},
    allPosts: []
  }
  onClickHandler () {
    fetch('http://localhost:3001/posts/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'whatever-you-want'
      },
      body: JSON.stringify({
        id: 'test1234',
        timestamp: Date.now(),
        title: 'Sample post',
        body: 'Sample body',
        author: 'Ted Nazareno',
        category: 'react',
        voteScore: 1,
        deleted: false
      })
    })


    fetch('http://localhost:3001/posts/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'whatever-you-want'
      }})
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
      let posts = data
      alert('hello world')
      alert(posts.length)
      })
  }
  render () {
    return (
    <div>
      {this.state.allPosts}
      <Form ref='simpleForm'>
          <Field
            name='city'
            label='Enter the City name'
            type='text'
            style={{width: 200}}
          />
          <Field
            name='state'
            label='Enter State name'
            type='text'
            style={{width: 200}}
          />


      </Form>
      <button onClick={this.onClickHandler.bind(this)}>Submit</button>
    </div>

    )
  }
}

export default Posts