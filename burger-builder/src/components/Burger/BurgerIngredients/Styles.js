import Styled from 'styled-components';

export const BreadBottom = Styled.div`
  height: 13%;
  width: 80%;
  min-width: 300px;
  background: linear-gradient(#F08E4A, #e27b36);
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
`;

export const BreadTop = Styled.div`
    height: 20%;
    width: 80%;
    min-width: 300px;
    background: linear-gradient(#bc581e, #e27b36);
    border-radius: 50% 50% 0 0;
    box-shadow: inset -15px 0 #c15711;
    margin: 2% auto;
    position: relative;
`;

export const Seeds1 = Styled.div`
  width: 8%;
  height: 10%;
  position: absolute;
  background-color: white;
  left: 30%;
  top: 50%;
  border-radius: 40%;
  transform: rotate(-20deg);
  box-shadow: inset -2px -3px #c9c9c9;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: -190%;
    top: -260%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px 2px #c9c9c9;
  }

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: 180%;
    top: -50%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px -3px #c9c9c9;
  }
`;

export const Seeds2 = Styled.div`
  width: 8%;
  height: 10%;
  position: absolute;
  background-color: white;
  left: 64%;
  top: 50%;
  border-radius: 40%;
  transform: rotate(10deg);
  box-shadow: inset -3px 0 #c9c9c9;


&:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: white;
  left: 170%;
  top: -140%;
  border-radius: 40%;
  transform: rotate(90deg);
  box-shadow: inset 1px 3px #c9c9c9;
}
`; 

export const Patty = Styled.div`
    width: 80%;
    min-width: 300px;
    height: 9.5%;
    background: linear-gradient(#7f3608, #66240c);
    margin: 2% auto;
    border-radius: 15px;
`;

export const Cheese = Styled.div`
    width: 90%;
    min-width: 325px;
    height: 2.7%;
    margin: 2% auto;
    background: linear-gradient(#f4d004, #d6bb22);
    border-radius: 20px;
`;

export const Greens = Styled.div`
    width: 85%;
    min-width: 316px;
    height: 5%;
    margin: 2% auto;
    background: linear-gradient(#228c1d, #91ce50);
    border-radius: 20px;
`;

export const Tomato = Styled.div`
    width: 75%;
    min-width: 280px;
    height: 7.3%;
    border-radius: 10px;
    background: linear-gradient(#ef6b13, #ff0033);
    margin: 2% auto;
`;