import { InputTextProps } from './type';
import TextField from '@mui/material/TextField';
import { useId } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const InputText = ({ name, label, placeholder }: InputTextProps) => {
  const { control } = useFormContext();
  const id = useId();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label={label || undefined}
          id={id}
          key={id}
          aria-invalid={!!error}
          aria-describedby={`${id}-error`}
          helperText={error ? error.message : null}
          placeholder={placeholder}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          variant="outlined"
        />
      )}
    />
  );
};
