import React from 'react';
import classNames from 'classnames/bind';
import styles from './ButtonWithIcon.module.scss';
import { ColoredRoundedButton } from '../../elements/Button/Button';

const cx = classNames.bind(styles);

export interface ButtonWithIconProps {
  className?: string;
  icon?: string;
  children?: React.ReactNode
  backgroundColor?: string;
  color?: string;
  activeBackgroundColor?: string;
  activeColor?: string;
}

const ButtonWithIcon = ({className, icon, children, backgroundColor, color, activeBackgroundColor, activeColor}: ButtonWithIconProps) => {
  return (
    <div className={cx('button-with-icon', className)}>
      <ColoredRoundedButton
        backgroundColor={backgroundColor}
        color={color}
        activeBackgroundColor={activeBackgroundColor}
        activeColor={activeColor}
        className={cx('button')}
      >
        {children}
      </ColoredRoundedButton>
    </div>
    
  )
};

export default ButtonWithIcon;