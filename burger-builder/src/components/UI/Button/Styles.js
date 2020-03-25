import Styled from 'styled-components/macro';

const colors = {
  success: '#5C9210',
  danger: '#944317',
}

export const Button = Styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  color: green;
  
  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }

  .success {
    color: ${colors.success};
  }

  .danger {
    color: ${colors.danger};
  }
`;
