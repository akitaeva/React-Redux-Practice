import React from 'react';

import * as Styled from './Styles';

const backdrop = ({show, clicked}) => (
   show ? <Styled.Backdrop onClick={clicked}/> : null
);

export default backdrop;