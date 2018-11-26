import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return(
                <li className="list-group-item" key={post.id}>
                   <Link to={`/posts/${post.id}`}> 
                    {post.title}
                   </Link>  
                </li>
            )
        })
    }
    render() {
       //console.log(this.props.posts)
        return (
            <div>
               <div className="text-xs-right">
                <Link className="btn btn-primary" to="/posts/new">
                  Add a Post
                </Link>   
               </div> 
                <h5>Posts</h5>
              <ul className="list-group">  
               {this.renderPosts()}
              </ul> 
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { 
        posts:state.posts
    };
}


export default connect(mapStateToProps, { fetchPosts })(PostsIndex);