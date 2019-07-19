import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post';
import FullPost from '../../components/FullPost';
import NewPost from '../../components/NewPost';
import * as Styled from './styles';

class Blog extends Component {
    state = {
        posts: []
    }
    
    componentDidMount () {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({posts: res.data});
        }); 
    }
    
    render () {
        const posts = this.state.posts.map(post => {
          return <Post key={post.id} title={post.title}/>;
        });
        return (
            <div>
                <Styled.postsSection>
                  {posts}
                </Styled.postsSection>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;