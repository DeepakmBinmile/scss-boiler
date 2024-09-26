import { forwardRef } from 'react';
import './button.scss';
import { ButtonProps } from './types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'medium', icon, children, loading, ...props }, ref) => (
    <button 
      ref={ref} 
      className={`custom-button ${variant} ${size} ${loading ? 'loading' : ''}`} 
      disabled={loading} 
      {...props}
    >
      {loading && <span className="button-loader"></span>}
      {icon && <span className="button-icon">{icon}</span>}
      {variant !== 'icons' && <span className="button-text">{children}</span>}
    </button>
  )
);

Button.displayName = 'Button';

export default Button;




