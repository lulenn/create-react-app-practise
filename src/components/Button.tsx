import {
  Button as AntdButton
} from 'antd';
import { ButtonProps as AntdButtonProps } from 'antd/lib/button';
import React from 'react';
import './Button.less';

export type ButtonProps = AntdButtonProps;

const Button = (props: ButtonProps) => {
  const { className, ...restProps } = props;
  return <AntdButton className={`CustomButton ${className}`} {...restProps}>Primary</AntdButton>;
}

export default Button;