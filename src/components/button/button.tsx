//This is a custom Button
import { forwardRef } from 'react';
import './button.scss';
import { ButtonProps } from './types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary',  
    size = 'medium', 
    icon, 
    children, 
    loading, 
    boxShadow = 'lg', 
    borderRadius = 'md', 
    ...props 
  }, ref) => {
    return (
      <button 
        ref={ref} 
        className={`custom-button ${variant} ${size} ${loading ? 'loading' : ''} box-shadow-${boxShadow} border-radius-${borderRadius}`} //Based on the variant,size,boxshadow,borderRadius  it will automatically detects the styling  
        disabled={loading} 
        {...props}
      >
        {loading && <span className="button-loader"></span>} {/* if loading the styling of button loader will be applied*/}
        {icon && <span className="button-icon">{icon}</span>}
        {variant !== 'icons' && <span className="button-text">{children}</span>} {/* if variant type is not icon then  only the button text will be shown  */}
      </button>
    );
  }
);

Button.displayName = 'Button'; {/* for the purpose of debugging*/}

export default Button;







