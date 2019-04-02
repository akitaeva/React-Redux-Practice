import React from 'react';

import * as Styled from '../Styles';

const buildCotrol = (props) => (
  <Styled.Control>
    <Styled.Label>{props.label}</Styled.Label>
    <button className="Less" onClick={props.removed} disabled={props.disabled}>Less</button>
    <button className="More" onClick={props.added}>More</button>
  </Styled.Control>
);

export default buildCotrol;