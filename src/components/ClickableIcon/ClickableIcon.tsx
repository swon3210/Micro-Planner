import React from 'react';
import * as icons from '../../assets/svgs/icons';
import classNames from 'classnames/bind';
import styles from './ClickableIcon.module.scss';
import styled from 'styled-components';

const cx = classNames.bind(styles);

type IconType = keyof typeof icons;

type ClickableIconProps = {
  /** 사용 할 아이콘 타입 */
  icon: IconType;
  /** 아이콘 색상 */
  color?: string;
  /** 아이콘 Hover 및 focus 색상 */
  activeColor?: string;
  /** 아이콘 크기 */
  size: string;
  /** 따로 집어넣을 클래스 */
  className?: string;
  /** 클릭시 실행할 함수 */
  onClick?: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
};

const ClickableArea = styled.div<{ size?: string; activeColor: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    transition: fill 0.5s;
  }
  &:hover,
  &:focus {
    .icon {
      fill: ${({ activeColor }) => activeColor};
    }
  }
`;

/** 아이콘을 보여주고 싶을 땐 `Icon` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 svg 형태로 아이콘을 보여주며, props 또는 스타일을 사용하여 아이콘의 색상과 크기를 정의 할 수 있습니다.
 *
 * 스타일로 모양새를 설정 할 때에는 `color`로 색상을 설정하고 `width`로 크기를 설정하세요.
 */

const ClickableIcon = ({
  icon,
  color = 'var(--textColor-3)',
  size = '24px',
  activeColor = 'var(--mainColor-1)',
  className,
  onClick,
}: ClickableIconProps) => {
  const SVGIcon = icons[icon];
  return (
    <ClickableArea
      size={size}
      activeColor={activeColor}
      className={cx(className, 'clickable-icon')}
    >
      <SVGIcon className={cx('icon')} fill={color} onClick={onClick} />
    </ClickableArea>
  );
};

ClickableIcon.defaultProps = {};

export default ClickableIcon;
