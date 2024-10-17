import './InputPhone.scss';
import 'react-phone-number-input/style.css';
import PhoneInput, { Country } from 'react-phone-number-input';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import * as React from 'react';

// Define your props for the InputPhone component
export type InputPhoneProps = {
  placeholder?: string;
  defaultCountry?: Country;
  name: string;
  label?: string;
  // textFieldProps?: React.ComponentProps<typeof TextField>;
};

// The InputPhone component
export function InputPhone({ placeholder, defaultCountry, name, label }: InputPhoneProps) {
  const { control } = useFormContext();

  // Custom input component wrapped with forwardRef
  const CustomInput = React.forwardRef<HTMLInputElement, any>(({ ...props }, ref) => (
    <TextField {...props} label={label} inputRef={ref} fullWidth />
  ));

  CustomInput.displayName = 'CustomInput'; // Set display name for easier debugging

  return (
    <div className="input-phone-container">
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div className={`phone-input-wrapper ${error ? 'error' : ''}`}>
            <PhoneInput
              error={Boolean(error)}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              helperText={error?.message}
              defaultCountry={defaultCountry}
              inputComponent={CustomInput} // Pass error to CustomInput
            />
          </div>
        )}
      />
    </div>
  );
}
