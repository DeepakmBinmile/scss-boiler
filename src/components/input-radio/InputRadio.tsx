import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useId } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { InputRadioProps } from './type';

export const InputRadio: React.FC<InputRadioProps> = ({ name, label, options }: InputRadioProps) => {
  const { control } = useFormContext();
  const id = useId();

  const generateRadioOptions = () => {
    return options?.map(
      singleOption =>
        singleOption && (
          <FormControlLabel
            key={singleOption.value}
            value={singleOption.value}
            label={singleOption.label}
            control={<Radio />}
            id={`${id}-${singleOption.value}`}
          />
        ),
    );
  };

  return (
    <FormControl component="fieldset" aria-labelledby={id} key={id}>
      <FormLabel id={id} component="legend">
        {label}
      </FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <RadioGroup aria-invalid={!!error} value={value} onChange={onChange}>
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};
