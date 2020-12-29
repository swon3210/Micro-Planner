import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import { RoundRangeInput } from '../../elements/Input/Input';

const cx = classNames.bind(styles);

export interface SliderProps {
  range: number;
  rangeDivider: number;
  rangeSetter: (progress: number) => void;
  className?: string;
}

const Slider = ({className, rangeSetter, rangeDivider}: SliderProps) => {

  const [isMovable, setIsMovable] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const rangeStart = (event: React.MouseEvent<HTMLInputElement>) => {
    setIsMovable(true);
  }

  const rangeMove = (event: React.MouseEvent<HTMLInputElement>) => {
    const slider = event.currentTarget;
    const rangeValue = Number(slider.value);
    const rangeColor = `linear-gradient(90deg, var(--mainColor-1) ${rangeValue}%, #ffffff ${rangeValue}%)`
    slider.style.background = rangeColor;
  };

  const rangeStop = (event: React.MouseEvent<HTMLInputElement>) => {
    const slider = event.currentTarget;
    let rangeValue = Number(slider.value);

    for (let i = 1; i <= rangeDivider; i++) {
      if (rangeValue < (100 / rangeDivider) * i) {
        if (rangeValue === 100) {
          rangeValue = 100;
        } else if (i === 1) {
          rangeValue = 1;
        }  
        rangeValue = (100 / rangeDivider) * (i - 1);
        break;
      }
    }

    const rangeColor = `linear-gradient(90deg, var(--mainColor-1) ${rangeValue}%, #ffffff ${rangeValue}%)`
    slider.value = String(rangeValue);
    slider.style.background = rangeColor;
    rangeSetter(rangeValue);
    setIsMovable(false);
  }

  return (
    <div className={cx('slider', className)}>
      <RoundRangeInput
        ref={inputRef}
        className={cx('slider-bar')}
        // 이거 start 로 동적으로 붙이자. 
        onMouseMove={isMovable ? rangeMove : undefined}
        onMouseDown={rangeStart}
        onMouseUp={rangeStop}
      />
    </div>
  )
};

export default Slider;