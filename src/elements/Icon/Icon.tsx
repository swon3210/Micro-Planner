import styled from 'styled-components';

export const Dot = styled.div<{backgroundColor?: string, activeColor?: string}>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  transition: background-color 0.5s;
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : "#E5E5E5" };
  &:hover {
    background-color: ${({activeColor}) => activeColor ? activeColor : "var(--mainColor-1)" };
  }
  &.active {
    background-color: ${({activeColor}) => activeColor ? activeColor : "var(--mainColor-1)" };
  }
`