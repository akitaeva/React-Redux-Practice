import styled from 'styled-components/macro';

export const SideDraweWrapper =  styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: beige;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  transform: ${({ transform }) => transform};


  @media (min-width: 500px) {
    display: none;
  }
`;