import './textField.scss';
import { TextFieldProps } from './types';
import * as React from 'react';

const TextField: React.FC<TextFieldProps> = ({ label, customSize = 'medium', error, required, icon, ...props }) => {
  return (
    <div className={`custom-textfield custom-textfield--${customSize}`}>
      {label && (
        <label className="textfield-label">
          {label}
          {required && <span className="textfield-required">*</span>}
        </label>
      )}
      <div className="textfield-input-container">
        {icon && <span className="textfield-icon">{icon}</span>}
        <input
          className={`textfield-input ${error ? 'textfield-input--error' : ''}`}
          required={required}
          {...props}
        />
      </div>
      {error && <span className="textfield-error">{error}</span>}
    </div>
  );
};

export default TextField;

