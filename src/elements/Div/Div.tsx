import styled from 'styled-components';

export const ColoredRoundSquare = styled.div<{backgroundColor?: string}>`
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : "var(--mainColor-1)"};
  border-radius: 5px;
`;

export const ColoredRoundBar = styled.div<{color?: string, width?: string;}>`
  background-color: ${({color}) => color ? color : "white"};
  width: ${({width}) => width ? width : "100%"};
  height: 10px;
  border-radius: 20px;
`;

export const ColoredBorderCircle = styled.div`
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: 50%;
  border: 3px solid var(--mainColor-1);
`;

