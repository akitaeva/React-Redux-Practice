import styled from 'styled-components/macro';

export const ToolbarWrapper = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;

  @media (max-width: 500px) {

  } 
`;


export const NavWrapper = styled.nav`
  height: 100%;

  @media (max-width: 500px) {
    display: none;
  } 
`;