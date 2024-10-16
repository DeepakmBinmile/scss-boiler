import { forwardRef } from 'react';

import './button.scss';
import { ButtonProps } from './button.type';

/**
 * A React component that renders a customizable button.
 *
 * @param variant - The variant of the button, defaults to 'primary'.
 * @param size - The size of the button, defaults to 'medium'.
 * @param icon - An optional icon to display in the button.
 * @param children - The content to display inside the button.
 * @param loading - Whether the button is in a loading state.
 * @param boxShadow - The box shadow style to apply to the button, defaults to 'lg'.
 * @param borderRadius - The border radius style to apply to the button, defaults to 'md'.
 * @param props - Additional props to be passed to the button element.
 * @returns A React element representing the button.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'medium', icon, children, loading, boxShadow = 'lg', borderRadius = 'md', ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={`custom-button ${variant} ${size} ${loading ? 'loading' : ''} box-shadow-${boxShadow} border-radius-${borderRadius}`}
        disabled={loading}
        {...props}
      >
        {loading && <span className="button-loader"></span>}
        {icon && <span className="button-icon">{icon}</span>}
        {variant !== 'icons' && <span className="button-text">{children}</span>}
      </button>
    );
  },
);

/**
 * Sets the display name of the `Button` component to 'Button'.
 * This is a common pattern in React components to provide a human-readable name
 * that can be used in debugging and development tools.
 */
Button.displayName = 'Button';

export default Button;
