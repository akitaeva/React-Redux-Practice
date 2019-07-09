import Styled from 'styled-components/macro';

export const navItemsWrapper = Styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 500px) {
    flex-direction: column;
  } 
  `; 