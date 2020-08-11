import styled from 'styled-components';

export const ColoredRoundedButton = styled.button<{backgroundColor?: string, color?: string, activeColor?: string, activeBackgroundColor?: string}>`
  padding: 10px 19px;
  border-radius: 23px;
  border: none;
  color: ${({color}) => color ? color : "#ffffff"};
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : "var(--mainColor-1)"};
  transition: all 0.5s ease;
  transition-property: background-color, color;
  &:focus {
    outline: none;
  }
  &:hover, &.active {
    color: ${({activeColor}) => activeColor ? activeColor : "#ffffff"};
    background-color: ${({activeBackgroundColor}) => activeBackgroundColor ? activeBackgroundColor : "var(--mainColor-2)"};
  }
`;

export const ColoredSquareButton = styled.button<{backgroundColor?: string, color?: string, activeColor?: string, activeBackgroundColor?: string}>`
  padding: 20px;
  border: none;
  color: ${({color}) => color ? color : "#ffffff"};
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : "var(--mainColor-1)"};
  transition: all 0.5s ease;
  transition-property: background-color, color;
  &:focus {
    outline: none;
  }
  &:hover, &.active {
    color: ${({activeColor}) => activeColor ? activeColor : "#ffffff"};
    background-color: ${({activeBackgroundColor}) => activeBackgroundColor ? activeBackgroundColor : "var(--mainColor-2)"};
  }
`;