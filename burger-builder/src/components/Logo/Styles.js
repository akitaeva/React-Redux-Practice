import Styled from 'styled-components/macro';

export const LogoWrapper = Styled.div`
  background-color: white;
  padding: 8px; 
  border-radius: 10px;
  height: ${({ height }) => height}%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    height: 100%;
    max-width: 90%;
  }
`;

