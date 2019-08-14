import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post';
import FullPost from '../../components/FullPost';
import NewPost from '../../components/NewPost';
import * as Styled from './styles';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }
    
    componentDidMount () {
      axios.get('/posts')
        .then(res => {
            const posts = res.data.slice(0, 6);
            const updPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Maxi'
                }
            })
            this.setState({posts: updPosts});
        })
        .catch(err => this.setState({error: true}));
    }

    postSelectedHandler = (id) => {
      this.setState({selectedPostId: id});
    }
    
    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong =(</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                          key={post.id} 
                          title={post.title} 
                          author={post.author}
                          clicked={()=> this.postSelectedHandler(post.id)}
                          />;
           });               
        }
    
        return (
            <div>
                <Styled.postsSection>
                  {posts}
                </Styled.postsSection>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;