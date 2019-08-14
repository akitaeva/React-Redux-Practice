import React from 'react';

import * as Styled from './styles';

const post = (props) => (
   <Styled.Post onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <Styled.Author>{props.author}</Styled.Author>
        </div>    
   </Styled.Post>


);

export default post;