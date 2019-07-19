import Styled from 'styled-components/macro';

export const Post = Styled.article`
  width: 250px;
  padding: 16px;
  text-align: center;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  margin: 10px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover,
  &:active {
  background-color: #C0DDF5;
 }
`;

export const Author = Styled.div`
  margin: 16px 0;
  color: #ccc;
`;
