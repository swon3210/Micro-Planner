import React from 'react';
import classNames from 'classnames/bind';
import styles from './InputBox.module.scss';

const cx = classNames.bind(styles);

export type InputObj = {
  id: number,
  text: string,
  onChangeHandler: (text: string) => void;
}

export interface InputBoxProps {
  className?: string;
  inputItems: InputObj[];
}

const InputBox = ({className, inputItems}: InputBoxProps) => {

  const inputElements = inputItems.map(item => {
    return <textarea key={item.id} onChange={(event) => item.onChangeHandler(event.target.value)} placeholder={item.text} className={cx('text-input')}></textarea>
  })

  return (
    <div
      className={cx('input-box', className)}      
    >
      {inputElements}
    </div>
  )
};

InputBox.defaultProps = {
  placeholderList: ["뭔가 입력하세요"]
}

export default InputBox;