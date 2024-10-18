import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { useId } from 'react';

import { InputDropdownProps } from './type';

export const InputDropdown: React.FC<InputDropdownProps> = ({
  name,
  options,
}: InputDropdownProps) => {
  const { control } = useFormContext();
  const id = useId();

  const generateSingleOptions = () => {
    return options?.map(
      option =>
        option && (
          <MenuItem key={option?.value} value={option?.value}>
            {option?.label}
          </MenuItem>
        ),
    )
  };

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
