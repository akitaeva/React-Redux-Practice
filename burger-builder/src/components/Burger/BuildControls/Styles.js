import Styled from 'styled-components/macro';

export const Controls = Styled.div`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  border-radius: 15%;
  margin: auto;
  padding: 10px 0;
`;

export const Control = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;

  button {
    display: block;
    font: inherit;
    padding: 5px;
    width: 80px;
    border: 1px solid #aa6817;
    curser: pointer;
    outline: none;

    &:disabled {
      background-color: #AC9980;
      border: 1px solid #7E7365;
      color: #ccc;
      cursor: default;
    }

    &:hover:disabled {
      background-color: #AC9980;
      color: #ccc;
      cursor: not-allowed;
    }
  }

  & .Less {  
    background-color: #D39952;
    color: white;
  }  

  &:hover .Less, &:active .Less {
      background-color: #DAA972;
      color: white;
  }

  & .More {
    background-color: #8F5E1E;
    color: white;
  }  

    &:hover .More, &:active .More{
      background-color: #99703F;
      color: white; 
  }
`;

export const Label = Styled.div`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`;

export const OrderBtn = Styled.button`
background-color: #DAD735;
outline: none;
cursor: pointer;
border: 1px solid #966909;
color: #966909;
font-family: inherit;
font-size: 1.2em;
padding: 15px 30px;
box-shadow: 2px 2px 2px #966909;

  &:hover, &:active {
    background-color: #A0DB41;
    border: 1px solid #966909;
    color: #966909;
  }

  &:disabled {
    background-color: #C7C6C6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888888;
  }

  &:not(:disabled) {
    animation: enable 0.3s linear;
  }
  
  @keyframes enable {
    0% {
        transform: scale(1);
    }
    60% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`; 

