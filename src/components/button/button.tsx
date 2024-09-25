import { forwardRef } from 'react';
import './button.scss';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'primary', size = 'medium', ...props }, ref) => (
  <button ref={ref} className={`custom-button ${variant} ${size}`} {...props} />
));

Button.displayName = 'Button';

export default Button;
