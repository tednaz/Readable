import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import Posts from './Posts'


class AllPostsNonCategorized extends Component{
    render(){
        return(
            <div>
               <h1> i am here in AllPostsNonCategorized extends Component</h1>
                
 
              <div className="createEditPost">
              <Link
                to='/createPost'
                className='create-edit-post'
                >Click me to add a new post
              </Link>
              </div>


            </div>
        )
    }
}

export default AllPostsNonCategorized
