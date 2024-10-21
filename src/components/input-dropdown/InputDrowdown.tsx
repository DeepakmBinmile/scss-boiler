import { InputDropdownProps } from './type';
import {
  FormControl, MenuItem, Select,
} from '@mui/material';
import { useId } from 'react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const InputDropdown: React.FC<InputDropdownProps> = ({
  name,
  options,
}: InputDropdownProps) => {
  const { control } = useFormContext();
  const id = useId();

  const generateSingleOptions = () => options?.map(
    (option) => option && (
          <MenuItem key={option?.value} value={option?.value}>
            {option?.label}
          </MenuItem>
    ),
  );

  return (
    <FormControl key={id} size="small" fullWidth>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Select
            // placeholder={placeholder}
            id={id}
            key={id}
            labelId={`${id}-label`}
            aria-invalid={!!error}
            aria-describedby={`${id}-helper-text`}
            value={value}
            onChange={onChange}
            displayEmpty
            fullWidth
          >
            {generateSingleOptions()}
          </Select>
        )}
      />
    </FormControl>
  );
};
