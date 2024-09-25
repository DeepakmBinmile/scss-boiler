import { forwardRef } from 'react';
import './button.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'medium', icon, children, ...props }, ref) => (
    <button ref={ref} className={`custom-button ${variant} ${size}`} {...props}>
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  )
);

Button.displayName = 'Button';

export default Button;



