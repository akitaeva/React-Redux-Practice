import Styled from 'styled-components/macro';

export const NavItem = Styled.li`
  margin: 0;
  box-sizing: border-box;
  dispay: flex;
  height: 100%;
  width: auto;

  a {
    color: white;
    text-deoration: none;
    height: 100%;
    padding: 16px 10px;
    border-bottom:  4px solid transparent;
    box-sizing: border-box;
    display: block;
  }


  a:hover,
  a:active  {
    background-color: #8F5C2C;
    border-bottom: 4px solid #40A4C8;
    color: white;
  }

  @media (max-width: 500px) {
    margin: 10px 0;
    dispay: block;
    width: 100%;

    a {
      color: #8F5C2C;
      width: 100%;
    }
  }
`;