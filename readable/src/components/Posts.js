import React, {Component} from 'react';
import {Form, Field} from 'simple-react-forms';
import * as ReadableApi from '../utils/ReadableApi'

class Posts extends Component {
  state = {
    postEntry: {},
    posts: []
  }
  
  componentDidMount(){
    alert("hi from Posts")
  }
  
  onClickHandler () {
    //create a uuid based on timestamp
                // const uuidv1 = require('uuid/v1'); 
    // let uuid = uuidv1().toString();
    console.log(this.refs['simpleForm'].getFormValues());
   // console.log("uuidv1 = " + uuid);
    // let postEntry = {
    //     id: "test123",
    //     timestamp: Date.now(),
    //     title: "Sample Post",
    //     body: "Lorem ipsum delorean",
    //     author: "John Doe",
    //     category: "react"
    // }
    
                // // id: "test123",
    // // timestamp: Date.now(),
    // // title: "Sample post",
    // // body: "Sample body",
    // // author: "Ted Nazareno",
    // // category: "react",
    // // voteScore: 1,
    // // deleted: false

    // const url = `http://localhost:3001/posts`;
    // console.log('posting post into url', url);
    // console.log('postEntry =' + {postEntry});
    // fetch(url, {
    //   method: 'post',
    //   headers: { 'Authorization': 'whatever-you-want' }, 
    // //   credentials: 'include', 
    //   token: 1,
    //   body: JSON.stringify({
    //     postEntry
    //   })
    //            })
    // .then(response => {
    //   if (response.status >= 200 && response.status < 300) {
    //     console.log(response);
    //   } else {
    //     const error = new Error(response.statusText);
    //     error.response = response;
    //     throw error;
    //   }
    // })
    // .catch(error => { console.log('request failed', error); });
  




    //    ReadableApi.getAllPosts().then((posts) => {
    //     this.setState({posts})
    //   })
  }
  render () {
    return (
    <div>
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
