import React from 'react';

import * as Styled from './styles';

const post = (props) => (
   <Styled.Post>
        <h1>{props.title}</h1>
        <div className="Info">
            <Styled.Author>Author</Styled.Author>
        </div>    
   </Styled.Post>


);

export default post;