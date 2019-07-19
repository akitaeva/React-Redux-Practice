import React, { Component } from 'react';

import * as Styled from './styles';

class FullPost extends Component {
    render () {
        let post = <p>Please select a Post!</p>;
        post = (
            <Styled.FullPost>
                <h1>Title</h1>
                <p>Content</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </Styled.FullPost>

        );
        return post;
    }
}

export default FullPost;