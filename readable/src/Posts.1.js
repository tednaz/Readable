import React, {Component} from 'react';
import {Form, Field} from 'simple-react-forms';

import * as BooksAPI from './BooksAPI'

class Posts extends Component {
  state = {
    postEntry: {},
    allPosts: []
  }
  onClickHandler () {
    //create a uuid based on timestamp
	const uuidv1 = require('uuid/v1');
    let uuid = uuidv1().toString();
    console.log(this.refs['simpleForm'].getFormValues());
    console.log("uuidv1 = " + uuid);
    let postEntry = {
        id: "test123123",
        timestamp: Date.now(),
        title: "Sample Post",
        body: "Lorem ipsum delorean",
        author: "John Doe",
        category: "react",
    }

    //const url = `${process.env.REACT_APP_BACKEND}/posts`;
    const url = "http://localhost:3001/posts"
    console.log('posting post into url', url);
    console.log('postEntry =' + {postEntry});
    fetch(url, {method: 'post', headers:{'Authorization': 'whatever-you-want'},
          body: JSON.stringify({
        id: 'test123',
            timestamp: Date.now(),
        title: 'Sample post',
        body: 'Sample body',
        author: 'Ted Nazareno',
        category: 'react',
        voteScore: 1,
          deleted: false
      })
               })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response);
      } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    })
    .catch(error => { console.log('request failed', error); });


    console.log("fetching posts")

    BooksAPI.getPosts().then((posts) => {
      this.setState({
        allPosts: posts
      })
    });

    // headers: {  },
    // credentials: 'include'

    fetch(url, {
            method: 'post',headers:{'Authorization': 'whatever-you-want'},
    })
	.then((result) => {
      return result.json();
    })
	.then((jsonResult) => {
      // Do something with the result
      console.log(jsonResult)
   	});
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
          />
          <Field
            name='state'
            label='Enter State name'
            type='text'
          />


      </Form>
      <button onClick={this.onClickHandler.bind(this)}>Submit</button>
    </div>

    )
  }
}

export default Posts