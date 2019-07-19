import Styled from 'styled-components/macro';

export const FullPost = Styled.div`
  width: 80%;
  margin: 20px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  text-align: center;
`;

// .Edit {

// }

export const Edit =  Styled.div`
  label {
    display: block;
    color: grey;
  };

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    color: #fa923f;

    &:hover,
    &:active {
      color: #521751;
    }

    &..Delete {
      color: red;
    }

    &.Delete:hover,
    &.Delete:active {
      color: darkred;
    }
  };
`;