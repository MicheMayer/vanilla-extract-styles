import React from 'react';
import * as styles from './Button.css'
import type { Size, Color } from './Button.css'

export interface ButtonProps {
  /** What background color to use */
  color?: Color;
  /** How large should the button be? */
  size?: Size;
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  size = 'medium',
  color = 'primary',
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[styles.variants({ size, color })].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
