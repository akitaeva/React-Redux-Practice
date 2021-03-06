import Styled from 'styled-components';

export const Burger = Styled.div`
  width: 100%;
  margin: auto auto .5rem;
  padding: 1.5rem;
  height: 16rem;
  background-color: #459;
  border-radius: 2%;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 1000px) and (min-height: 700px) {
   width: 44rem;
   height: 38rem;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 28rem;
    height: 24rem;
   }

   @media (min-width: 500px) and (max-height: 400px) {
    width: 22rem;
    height: 19rem;
   } 
`;