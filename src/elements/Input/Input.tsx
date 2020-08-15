import styled from 'styled-components';

export const RoundRangeInput = styled.input.attrs({
  type: 'range',
  min: '1',
  max: '100',
  defaultValue: '1'
})`

  /* Bar */
  -webkit-appearance: none;
  width: 100%;
  height: 12px;
  border-radius: 20px;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  background: linear-gradient(90deg, var(--mainColor-1) 0%, #ffffff 0%);

  /* Thumb */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 50%;
    border: 3px solid var(--mainColor-1);
  }

  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 50%;
    border: 3px solid var(--mainColor-1);
  }

  &:hover {
    opacity: 1;
  }
`;

export const TimeInput = styled.input.attrs({
  type: 'time'
})`
  font-family: 'MSBold', 'SpoqaBold';
  color: var(--textColor-3);
  font-size: 1rem;
  border: none;
  &:focus {
    outline: none;
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(0.5);
    margin-top: 1px;
  }
`;
